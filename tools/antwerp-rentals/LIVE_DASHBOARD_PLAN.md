# From static snapshot to live dashboard

A phased plan for turning the current build-once map into something that
refreshes itself and tracks the market over time.

Each phase stands alone, ships something useful, and can be reverted without
touching the ones before it. `web/index.html` keeps working throughout.

## The premise

Only one of the six inputs is actually live:

| Input | Changes | Treatment |
|---|---|---|
| Immoweb listings | daily | **live** — the whole point |
| OSM tram stops (`01`) | ~yearly | build-time constant |
| OSM line geometry (`07`) | ~yearly | build-time constant |
| 800 m buffers (`02`) | derived from the above | build-time constant |
| Flemish noise raster (`06`) | never — fixed 2021 survey | static asset |
| Line colours (`_env.LINE_COLOURS`) | never | static asset |

So this is not "make the pipeline live". It is "make `03`→`04` live and leave
the other four frozen". That distinction is what keeps the work small and the
scheduled job fast.

Current baseline: snapshot fetched 2026-09-04 17:39, 148 listings matching the
attribute filters, 109 within 800 m.

## Non-goals

- No backend service or database server. Everything below is a static site plus
  a scheduled job.
- Not making OSM or noise data live. Re-run `01`/`07`/`02`/`06` by hand on the
  rare occasion the network changes.
- Not moving the spatial filter into the browser. It is cheap and correct in
  Python; leave it there.

---

## Phase 1 — Decouple the data from the HTML

**Why first:** until this lands, refreshing data means regenerating a 247 KB
HTML file. Afterwards the page is a fixed shell and a refresh is one small JSON
write. Every later phase depends on it.

**What's there now.** `05_build_map.py:750-756` substitutes six JSON blobs into
the JS template before writing the page:

```
{{APTS}}     the listings          <- live
{{STOPS}}    tram stops            <- constant
{{LINES}}    line list             <- constant
{{COLOURS}}  line colours          <- constant
{{NOISE}}    noise overlay bounds  <- constant
{{SHAPES}}   route geometry        <- constant
```

Five of the six never change between runs. The template already has clean
seams, so this is a mechanical change, not a rewrite.

**Do:**

1. Split the emit into two files under `web/data/`:
   - `network.json` — `STOPS`, `LINES`, `COLOURS`, `NOISE`, `SHAPES`. Rewritten
     only when `01`/`07`/`02`/`06` are re-run.
   - `listings.json` — `APTS`. Rewritten by every refresh.
2. Replace the six substitutions with a `fetch()` of those two files, then run
   the existing init code. Keep the marker/sidebar/filter JS exactly as is —
   it already works off in-memory arrays.
3. Add `--inline` to `05_build_map.py` that restores the current baked-in
   behaviour, so `web/index.html` stays openable as a `file://` page for
   offline use. (`fetch()` of a relative path fails under `file://`, so the
   split version needs a local server: `python -m http.server` from `web/`.)

**Validate:** `03_fetch_immoweb.py --from-cache` replays `immoweb_pages.json`
without touching the network, so Phases 1, 2 and 4 can all be developed and
tested offline. Re-run `04` then `05`, serve `web/`, confirm the map is
identical to the current one.

**Done when:** `index.html` contains no listing data, the served map is
visually identical, and re-running `04` changes what the page shows on reload
with no HTML rebuild.

*Effort: ~half a day.*

---

## Phase 2 — Make `03` safe to run unattended

**Why:** a scheduled job that can silently destroy good data is worse than no
scheduled job.

**The specific hazard.** `03_fetch_immoweb.py:201-202`:

```python
if not results:
    break
```

If a mid-pagination request returns HTTP 200 with an empty `results` array —
which is exactly what soft rate-limiting looks like — the loop breaks and
execution falls through to the write at line 240, overwriting a complete
snapshot with a truncated one. The empty-guard at line 224 only catches a
*total* wipeout, not a partial one. Running interactively you would see the
page counts and notice; running on a cron you would not.

**Do:**

1. Track completeness explicitly. The response carries `totalItems`; if the
   loop exits before `len(records)` approaches it, mark the run truncated.
2. Publish atomically, with a floor:

```python
def publish(path, payload, floor=0.6, force=False):
    """Write JSON atomically; refuse a suspicious collapse in feature count."""
    new_n = len(payload["features"])
    if path.exists() and not force:
        old_n = len(json.loads(path.read_text(encoding="utf-8"))["features"])
        if old_n and new_n < old_n * floor:
            raise RuntimeError(
                "refusing to publish {}: {} -> {} features".format(
                    path.name, old_n, new_n
                )
            )
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(payload, ensure_ascii=False, indent=1),
                   encoding="utf-8")
    tmp.replace(path)
```

   Add `--force` to override deliberately (a genuine market collapse, or a
   changed `--postcodes`).

3. Emit `web/data/status.json` every run:

```json
{
  "fetched_at": "2026-09-06T04:12:03Z",
  "total_items": 154,
  "unique": 148,
  "within_800m": 109,
  "complete": true,
  "error": null
}
```

4. Render it in the page as a persistent "data as of ..." line, and show a
   visible banner when `fetched_at` is older than ~36 h or `complete` is false.
   **A dashboard that shows yesterday's market as today's is worse than the
   honest static snapshot it replaced.** On a failed run the job should still
   publish a `status.json` with the error and leave `listings.json` untouched.

**Done when:** a simulated mid-pagination empty response leaves the previous
`listings.json` intact, exits non-zero, and the served page shows a staleness
banner.

*Effort: ~2 hours.*

---

## Phase 3 — Schedule it

**Recommended:** GitHub Actions on a daily cron, committing the refreshed JSON,
with `web/` published by GitHub Pages. No server to run, no hosting bill, and
the commit history becomes a free record of the market — which Phase 4 then
mines.

Daily is the right cadence. These listings do not move hourly, and a low rate
is also the best protection against the risk below.

```yaml
name: refresh-listings
on:
  schedule: [{ cron: "0 4 * * *" }]   # 06:00 Brussels
  workflow_dispatch:
jobs:
  refresh:
    runs-on: ubuntu-latest
    permissions: { contents: write }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.12", cache: pip }
      - run: pip install -r requirements.txt
      - run: python scripts/03_fetch_immoweb.py
      - run: python scripts/04_filter_listings.py
      - run: python scripts/05_build_map.py --data-only
      - name: commit
        run: |
          git config user.name  "listings-bot"
          git config user.email "bot@users.noreply.github.com"
          git add web/data data/raw/immoweb_rentals.geojson \
                  data/processed/apartments_near_tram.geojson data/history
          git diff --staged --quiet || git commit -m "listings $(date -u +%F)"
          git push
```

**Do:**

1. Write `requirements.txt` — the pipeline currently assumes the local
   `geospatial` conda env and pins nothing.
2. Commit the build-time constants so CI has them: `delijn_tram_stops.geojson`,
   `delijn_lines.json`, `delijn_line_shapes.geojson`, `stop_buffers_800m.geojson`,
   plus `web/noise_lden_2021.png` and `web/noise_bounds.json`.
3. Add `--data-only` to `05_build_map.py`, writing `web/data/*.json` without
   re-rendering the shell.
4. Keep `immoweb_pages.json` out of the repo — 4.8 MB of raw API responses per
   run. Keep it local for auditing; add it to `.gitignore`.
5. `_env.py`'s PROJ/GDAL fix is a no-op off this machine, but harmless — leave
   it. It only rewrites paths when it finds a `proj.db`.

**On slimming `04`:** it pulls geopandas for a spatial join against precomputed
buffers, which is the slowest install in the job (~40 s). It could be rewritten
with shapely + an STRtree. **Don't, initially.** Divergent code paths between
your machine and CI is a worse problem than 40 seconds of install time, and the
`geospatial` env is how you debug locally.

**Done when:** the workflow runs green on `workflow_dispatch`, commits a
changed `listings.json`, and the Pages site reflects it within a minute.

*Effort: ~half a day, most of it pinning dependencies.*

---

## Phase 4 — History, which is what makes it a dashboard

Phases 1–3 give you a *live map*. A dashboard shows **change**. This phase is
where the project stops duplicating what Immoweb's own search already does.

Listings carry a stable `id` and a `lastModificationDate` (surfaced as
`updated` at `03_fetch_immoweb.py:134`), so consecutive snapshots diff cleanly.

**Storage.** Append one slim row per listing per run to
`data/history/listings.jsonl`:

```json
{"date":"2026-09-06","id":21544592,"rent":995,"costs":50,"m2":78,"pc":"2018","lines":"4,7","updated":"2026-09-04T13:00:00Z"}
```

At ~148 rows/day this is roughly 20 KB/day, under 8 MB/year, and append-only
JSONL produces clean git diffs. Compact to Parquet if it ever matters.

**Panels this unlocks:**

- **New / gone since yesterday** — set difference on `id`. The single most
  useful thing a rental watcher wants.
- **Price cuts** — same `id`, lower `rent` than a previous run. A strong signal
  a listing is not moving.
- **Days on market** — from each `id`'s first-seen date. Also lets you fade or
  flag stale listings on the map.
- **Median rent over time**, overall and per tram line, off the `lines` tag `04`
  already writes.
- **Supply per line** — count within each line's 800 m catchment over time.

**Do:**

1. New step `08_update_history.py`: read `apartments_near_tram.geojson`, append
   today's rows, emit `web/data/history.json` (pre-aggregated series — do not
   ship the raw JSONL to the browser).
2. Add it to `run_all.py` and to the workflow, after `04`.
3. Add a collapsible panel to the page: the change list, and a rent-trend
   sparkline.

**Done when:** two consecutive runs produce a populated new/gone/price-cut list
that matches a manual diff of the two snapshots.

*Effort: 1–2 days, mostly front-end.*

---

## The risk that should drive the whole decision

Immoweb has no public API. `03` calls an undocumented endpoint with a spoofed
browser User-Agent and `X-Requested-With` header
(`03_fetch_immoweb.py:70-79`). Running that once from a home machine is one
thing; running it on a schedule from a datacenter IP is materially different:

- Cloud IP ranges are blocked far more aggressively than residential ones.
- A recurring automated hit against an undocumented endpoint is much likelier
  to trip rate-limiting.
- The JSON shape can change without notice and silently break `flatten()`.

Mitigations, in order: keep the cadence at daily; keep the existing backoff and
the 1.5 s inter-page pause; make Phase 2's staleness surfacing non-optional.

**Fallback if CI gets blocked:** run the same job from this machine on Task
Scheduler and push the results. Phases 1, 2 and 4 are unaffected — only the
*where* of Phase 3 changes, which is why the scheduling is deliberately the
thinnest layer in the plan.

**Secondary benefit:** the sidebar hot-links photos from Immoweb's CDN, so they
404 as listings come off the market. A live refresh fixes that rot; the current
static snapshot will keep degrading visibly.

---

## Refresh order, today

Until Phase 3 lands, refreshing by hand means `03` → `04` → `05`. Note that
`run_all.py --from N` counts positions in `STEPS`, not filename prefixes — the
run order is `01, 07, 02, 03, 04, 06, 05`, so `03` is position **4**:

```
C:/anaconda/envs/geospatial/python.exe scripts/run_all.py --from 4
```

That also re-runs `06`, which re-downloads the noise raster unnecessarily.
Running the three scripts directly is faster.
