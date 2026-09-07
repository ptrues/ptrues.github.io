r"""Pull Immoweb apartment rental listings as points into data/raw.

Immoweb has no documented public API, but the site's own search page is backed
by a JSON endpoint that answers plain GETs:

    GET https://www.immoweb.be/en/search-results/apartment/for-rent
        ?countries=BE&postalCodes=BE-2000,...
        &minBedroomCount=2&maxBedroomCount=2&maxPrice=1100
        &page=1&orderBy=relevance
    (with X-Requested-With: XMLHttpRequest)

Response shape:  {criteria, results: [...], totalItems, count, itemsPerPage,
currentPage, ...}, 30 results per page. Each result carries
property.location.latitude / .longitude, property.bedroomCount and
transaction.rental.monthlyRentalPrice.

WHERE THE FILTERS GO
--------------------
The endpoint understands the attribute filters natively, so bedrooms, rent cap
and transaction type are applied BEFORE the call -- that turns ~400 Antwerp
apartments into ~40 and keeps the paging short. It has no polygon predicate,
so the "within 800 m of a tram stop" test is applied AFTER, against the buffers
from 02_buffer_stops.py; that happens in 04_filter_listings.py.

Writes data/raw/immoweb_rentals.geojson (all listings matching the attribute
filters, unfiltered spatially) plus the raw JSON pages next to it for auditing.

Usage:
    python 03_fetch_immoweb.py [--max-price 1100] [--bedrooms 2] [--max-pages 40]
"""
from __future__ import annotations

import argparse
import json
import sys
import time

import _env
import requests

SEARCH_URL = "https://www.immoweb.be/en/search-results/apartment/for-rent"
CLASSIFIED_URL = "https://www.immoweb.be/en/classified/{}"
OUT = _env.RAW / "immoweb_rentals.geojson"
RAW_PAGES = _env.RAW / "immoweb_pages.json"

# Postcodes of the Antwerp agglomeration touched by the tram / premetro network.
# Deliberately generous -- the 800 m spatial filter in step 04 does the real
# trimming, this list only bounds how much the API has to return.
ANTWERP_POSTCODES = [
    "2000",  # Antwerpen centrum
    "2018",  # Antwerpen Zuid / Zurenborg
    "2020",  # Kiel
    "2030",  # Luchtbal / haven
    "2050",  # Linkeroever
    "2060",  # Antwerpen Noord / Seefhoek
    "2100",  # Deurne
    "2110",  # Wijnegem
    "2140",  # Borgerhout
    "2150",  # Borsbeek
    "2160",  # Wommelgem
    "2170",  # Merksem
    "2180",  # Ekeren
    "2530",  # Boechout
    "2600",  # Berchem
    "2610",  # Wilrijk
    "2640",  # Mortsel
    "2660",  # Hoboken
]

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "en-GB,en;q=0.9,nl;q=0.8",
    "X-Requested-With": "XMLHttpRequest",
    "Referer": "https://www.immoweb.be/en/search/apartment/for-rent",
}


def fetch_page(session, page, params):
    query = dict(params, page=page)
    for attempt in range(5):
        r = session.get(SEARCH_URL, params=query, headers=HEADERS, timeout=60)
        if r.status_code == 200:
            return r.json()
        wait = 5 * (attempt + 1)
        print("  page {} -> HTTP {}, retrying in {}s".format(page, r.status_code, wait))
        time.sleep(wait)
    raise RuntimeError("Immoweb refused page {} repeatedly".format(page))


def flatten(result):
    """One search result -> flat properties dict, or None if unmappable."""
    prop = result.get("property") or {}
    loc = prop.get("location") or {}
    lat, lon = loc.get("latitude"), loc.get("longitude")
    if lat is None or lon is None:
        return None

    rental = ((result.get("transaction") or {}).get("rental")) or {}
    price = result.get("price") or {}
    media = result.get("media") or {}
    pics = media.get("pictures") or []

    street = " ".join(
        str(x) for x in (loc.get("street"), loc.get("number")) if x
    ).strip()
    if loc.get("box"):
        street = "{} box {}".format(street, loc["box"])

    rent = rental.get("monthlyRentalPrice") or price.get("mainValue")
    costs = rental.get("monthlyRentalCosts") or 0
    surface = prop.get("netHabitableSurface")

    return {
        "id": result.get("id"),
        "title": prop.get("title"),
        "subtype": prop.get("subtype"),
        "street": street or None,
        "postal_code": loc.get("postalCode"),
        "locality": loc.get("locality"),
        "place": loc.get("placeName"),
        "floor": loc.get("floor"),
        "bedrooms": prop.get("bedroomCount"),
        "surface_m2": surface,
        "rent_eur": rent,
        "costs_eur": costs,
        "total_eur": (rent + costs) if isinstance(rent, int) else rent,
        "eur_per_m2": round(rent / surface, 1) if rent and surface else None,
        "agency": result.get("customerName"),
        "flag": (result.get("flags") or {}).get("main"),
        "updated": (result.get("publication") or {}).get("lastModificationDate"),
        "image": pics[0].get("smallUrl") if pics else None,
        "image_large": pics[0].get("largeUrl") if pics else None,
        # every photo the search endpoint hands back (usually 4), hot-linked
        # from Immoweb's CDN -- nothing is copied locally. Joined with "|"
        # because GeoJSON round-trips scalars more reliably than lists.
        "photos": "|".join(p["largeUrl"] for p in pics if p.get("largeUrl")) or None,
        "url": CLASSIFIED_URL.format(result.get("id")),
        "lat": lat,
        "lon": lon,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--max-price", type=int, default=1100)
    ap.add_argument("--bedrooms", type=int, default=2)
    ap.add_argument("--max-pages", type=int, default=40)
    ap.add_argument(
        "--postcodes",
        default=",".join(ANTWERP_POSTCODES),
        help="comma separated Belgian postcodes to search",
    )
    ap.add_argument(
        "--from-cache",
        action="store_true",
        help="rebuild the GeoJSON from the saved JSON pages instead of "
             "re-querying Immoweb",
    )
    args = ap.parse_args()

    codes = [c.strip() for c in args.postcodes.split(",") if c.strip()]
    params = {
        "countries": "BE",
        "postalCodes": ",".join("BE-" + c for c in codes),
        "minBedroomCount": args.bedrooms,
        "maxBedroomCount": args.bedrooms,
        "maxPrice": args.max_price,
        "orderBy": "relevance",
    }
    print("server-side filters: {} bedrooms, <= EUR {}/month, {} postcodes".format(
        args.bedrooms, args.max_price, len(codes)
    ))

    cached = None
    if args.from_cache:
        cached = json.loads(RAW_PAGES.read_text(encoding="utf-8"))
        print("replaying {} cached pages from {}".format(len(cached), RAW_PAGES.name))
    else:
        session = requests.Session()
        session.get("https://www.immoweb.be/en", headers=HEADERS, timeout=60)  # cookies

    records, pages, seen = {}, [], set()
    page = 1
    while page <= args.max_pages:
        if cached is not None:
            if page > len(cached):
                break
            data = cached[page - 1]
        else:
            data = fetch_page(session, page, params)
        pages.append(data)
        results = data.get("results") or []
        total = data.get("totalItems") or 0
        per_page = data.get("itemsPerPage") or 30
        if page == 1:
            print("{} listings match, {} per page".format(total, per_page))
        if not results:
            break

        new = 0
        for res in results:
            if res.get("id") in seen:
                continue
            seen.add(res.get("id"))
            rec = flatten(res)
            if rec is None:
                continue
            records[rec["id"]] = rec
            new += 1
        print("  page {}: {} results ({} new, {} total)".format(
            page, len(results), new, len(records)
        ))

        if page * per_page >= total:
            break
        page += 1
        if cached is None:
            time.sleep(1.5)  # be gentle

    if not records:
        print("! no listings retrieved", file=sys.stderr)
        return 1

    features = []
    for rec in sorted(records.values(), key=lambda r: r["rent_eur"] or 0):
        rec = dict(rec)
        lon, lat = rec.pop("lon"), rec.pop("lat")
        features.append(
            {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [lon, lat]},
                "properties": rec,
            }
        )
    gj = {"type": "FeatureCollection", "features": features}
    OUT.write_text(json.dumps(gj, ensure_ascii=False, indent=1), encoding="utf-8")
    RAW_PAGES.write_text(json.dumps(pages, ensure_ascii=False), encoding="utf-8")

    rents = [f["properties"]["rent_eur"] for f in features if f["properties"]["rent_eur"]]
    print("\n{} listings -> {}".format(len(features), OUT))
    if rents:
        print("rent range: EUR {} - {}".format(min(rents), max(rents)))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
