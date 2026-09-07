r"""Publishing that is safe to run unattended: atomic writes, a collapse guard,
and the run-status file the page reads to say how old it is.

Run interactively you would notice a bad refresh -- the page counts scroll past
and something looks off. Run from a cron at 06:00 you would not, and the failure
mode is silent: a truncated snapshot overwrites a good one and the map simply
shows fewer apartments than exist. Everything here exists to make that loud.

Three separate protections, because they catch different things:

  check_collapse()  a big drop in feature count is refused outright
  atomic writes     a crash mid-write cannot leave a half-file behind
  status.json       whatever happens, the page can say when the data is from
"""
from __future__ import annotations

import json
import sys
from datetime import datetime, timezone

import _env


class Collapse(RuntimeError):
    """A publish was refused because the feature count fell off a cliff."""


def now_utc():
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def check_collapse(path, new_n, floor=0.6, force=False):
    """Raise Collapse if `new_n` is a suspicious drop from what `path` holds.

    The floor is deliberately blunt. It is not trying to model the rental
    market; it is trying to catch a truncated fetch, where the count does not
    drift, it falls off a cliff. A real market moves by a few percent a day, so
    anything past 40% down is far likelier to be a broken run than real news.
    """
    if force or not path.exists():
        return
    try:
        old_n = len(json.loads(path.read_text(encoding="utf-8"))["features"])
    except (ValueError, KeyError, OSError):
        return  # unreadable or not GeoJSON: nothing to compare against
    if old_n and new_n < old_n * floor:
        raise Collapse(
            "refusing to publish {}: {} -> {} features, past the {:.0%} floor. "
            "Re-run with --force if the drop is real.".format(
                path.name, old_n, new_n, floor
            )
        )


def _atomic_write(path, text):
    """Write via a sibling temp file, then rename over the target.

    os.replace (which Path.replace uses) is atomic within a volume on both
    Windows and POSIX, so a reader either sees the whole old file or the whole
    new one -- never a partial write from an interrupted run.
    """
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp" + path.suffix)
    tmp.write_text(text, encoding="utf-8")
    tmp.replace(path)


def publish(path, payload, floor=0.6, force=False):
    """Write a GeoJSON FeatureCollection atomically, refusing a collapse."""
    check_collapse(path, len(payload["features"]), floor, force)
    _atomic_write(path, json.dumps(payload, ensure_ascii=False, indent=1))
    return len(payload["features"])


def read_status():
    if not _env.STATUS_JSON.exists():
        return {}
    try:
        return json.loads(_env.STATUS_JSON.read_text(encoding="utf-8"))
    except ValueError:
        return {}


def write_status(**fields):
    """Merge `fields` into status.json and write it atomically.

    Merged, not replaced, because two steps contribute: 03 knows whether the
    fetch was complete, 04 knows how many listings survived the spatial filter.

    The fields, and why there are two timestamps:

      fetched_at   when listings data was last *successfully* fetched. A failed
                   run must not touch it -- stamping it with the time of a run
                   that fetched nothing is precisely how a dashboard ends up
                   insisting stale data is fresh.
      checked_at   when a run last *attempted*. Always updated. The difference
                   between the two is how long the thing has been broken.
      complete     whether the last attempt got the whole result set
      error        what went wrong on the last attempt, or None
    """
    status = read_status()
    status.update(fields)
    _atomic_write(
        _env.STATUS_JSON,
        json.dumps(status, ensure_ascii=False, indent=1) + "\n",
    )
    return status


def fail(error, **fields):
    """Record a failed run and report it. Returns 1, for `return fail(...)`.

    fetched_at is deliberately not among the fields written: the published data
    is whatever the last good run left, and it keeps that run's timestamp so the
    page ages it honestly.
    """
    write_status(checked_at=now_utc(), complete=False, error=str(error), **fields)
    sys.stdout.flush()   # so the failure lands after the run log, not before it
    print("! {}".format(error), file=sys.stderr)
    print("! recorded in {}; published data left untouched".format(
        _env.STATUS_JSON.name
    ), file=sys.stderr)
    return 1
