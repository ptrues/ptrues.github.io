/* London trip guide: static, light-mode, phone-first.
 * Routes (relative to the folder the guide is served from):
 *   ./                    all days
 *   ./?j=<journey-id>     one journey (stable links used in Calendar events)
 *   ./?j=<id>&o=<n>       journey with option n selected (e.g. Friday return)
 *   ./?print=<day-id>     printable day used to make the PDF backups
 */
(() => {
  'use strict';
  const app = document.getElementById('app');
  const TZ = 'Europe/London';
  let trip = null;
  const mapCache = new Map();
  let cleanup = [];

  // ------------------------------------------------------------ utilities
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const params = () => new URLSearchParams(location.search);
  const dayOf = id => trip.days.find(d => d.id === id);
  const londonNow = () => {
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'})
      .formatToParts(new Date()).map(p => [p.type, p.value]));
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  const navURL = (coord) => `https://www.google.com/maps/dir/?api=1&destination=${coord[1]},${coord[0]}&travelmode=walking`;
  const link = (query) => query ? `?${query}` : './';
  // Home-list titles wrap only at their " · " separators: each short phrase
  // stays on one line (long phrases still wrap normally).
  const phrases = t => String(t).split(' · ').map(x => x.length <= 24 ? `<span class="phrase">${esc(x)}</span>` : esc(x)).join(' · ');
  const sortKey = t => { const m = /^(\d\d):(\d\d)/.exec(t || ''); return m ? +m[1] * 60 + +m[2] : (t === 'Evening' ? 19 * 60 : 24 * 60); };

  // Every data request carries the build version, so a new deployment never
  // reuses a file the browser cached from an older one. The offline copy
  // matches these requests ignoring the query string.
  const VERSION = (document.querySelector('meta[name="guide-version"]') || {}).content || '';
  async function getJSON(url) {
    const res = await fetch(VERSION ? `${url}?v=${VERSION}` : url);
    if (!res.ok) throw new Error(`${url}: ${res.status}`);
    return res.json();
  }
  async function mapsFor(id) {
    if (!mapCache.has(id)) mapCache.set(id, getJSON(`data/maps/${id}.json`));
    return mapCache.get(id);
  }

  // ------------------------------------------------------------ routing
  function go(href, replace) {
    history[replace ? 'replaceState' : 'pushState']({}, '', href);
    render(true);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[data-nav]');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    go(a.getAttribute('href'));
  });
  window.addEventListener('popstate', () => render(false));

  async function render(scrollTop) {
    cleanup.forEach(f => f()); cleanup = [];
    document.body.classList.toggle('white-page', params().has('tickets'));
    const p = params();
    try {
      if (p.has('tickets')) await renderTickets();
      else if (p.get('print')) await renderPrint(p.get('print'));
      else if (p.get('j')) await renderJourney(p.get('j'), +(p.get('o') || 0));
      else renderHome(p.get('d'));
    } catch (err) {
      console.error(err);
      app.innerHTML = `<p class="error">This page could not be loaded. ${navigator.onLine ? '' : 'You appear to be offline. '}<a href="./" data-nav>Back to all days</a></p>`;
    }
    if (scrollTop && !params().get('t')) window.scrollTo(0, 0);
  }

  // ------------------------------------------------------------ home
  function dayEntries(day) {
    const rows = day.items.map((item, i) => {
      if (item.journey) {
        const j = trip.journeys[item.journey];
        return {i, time: j.time_label, key: sortKey(j.start || j.time_label), journey: j};
      }
      return {i, time: item.time, key: sortKey(item.time), item};
    });
    trip.bookings.filter(b => b.day === day.id).forEach((b, k) => rows.push({i: 100 + k, time: b.start, key: sortKey(b.start) + 0.5, booking: b}));
    return rows.sort((a, b) => a.key - b.key || a.i - b.i);
  }
  // The home card: timed journeys show Next/Now; once a day's last timed item
  // (journeys and bookings such as the museum or the cruise) has ended, the
  // day's untimed evening pages (dinner, the Friday return) show together.
  function cardEntries() {
    const out = [];
    trip.days.forEach(d => {
      const js = d.items.filter(i => i.journey).map(i => trip.journeys[i.journey]);
      const timed = js.filter(j => j.start);
      timed.forEach(j => out.push({kind: 'timed', j, d, at: `${d.date}T${j.start}`, until: `${d.date}T${j.end || j.start}`}));
      const evening = js.filter(j => !j.start);
      if (evening.length) {
        const ends = timed.map(j => j.end || j.start).concat(trip.bookings.filter(b => b.day === d.id).map(b => b.end || b.start));
        const busy = ends.sort().pop() || '17:00';
        out.push({kind: 'evening', js: evening, d, at: `${d.date}T${busy}`, until: `${d.date}T23:59`});
      }
    });
    return out;
  }
  function nextCardHTML() {
    const now = londonNow();
    const e = cardEntries().find(x => x.until >= now);
    if (!e) return '';
    if (e.kind === 'timed') {
      return `<a class="next-card" href="${link('j=' + e.j.id)}" data-nav><span class="eyebrow">${e.at <= now ? 'Now' : 'Next'}</span>
        <strong>${esc(e.j.title)}</strong><span class="when">${esc(e.d.label)} · ${esc(e.j.time_label)}</span></a>`;
    }
    const today = e.d.date === now.slice(0, 10);
    return `<div class="next-card"><span class="eyebrow">${e.at <= now ? 'This evening' : today ? 'Later today' : 'Next'}</span>
      ${e.js.map(j => `<a class="evening-link" href="${link('j=' + j.id)}" data-nav><strong>${esc(j.title)}</strong><span aria-hidden="true">›</span></a>`).join('')}
      <span class="when">${esc(e.d.label)} · Evening</span></div>`;
  }
  function refreshCard() {
    const slot = document.querySelector('.next-slot');
    if (slot) slot.innerHTML = nextCardHTML();
  }
  // Keep the card current while the home page stays open or returns from the background.
  setInterval(refreshCard, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshCard(); });
  window.addEventListener('pageshow', refreshCard);
  window.addEventListener('focus', refreshCard);

  function trainDeparturesHTML() {
    const stations = new Map();
    function collect(sections) {
      for (const s of sections || []) {
        for (const service of s.services || []) {
          if (!service.live_departures_url) continue;
          if (!stations.has(service.from)) stations.set(service.from, new Map());
          stations.get(service.from).set(service.to, service.live_departures_url);
        }
        for (const option of s.options || []) collect(option.sections);
      }
    }
    Object.values(trip.journeys).forEach(j => collect(j.sections));
    return `<section class="downloads train-departures"><h2>Train Departures</h2>${[...stations].sort(([a], [b]) => a.localeCompare(b)).map(([station, destinations]) =>
      `<div class="departure-station"><h3>${esc(station)}</h3><ul>${[...destinations].sort(([a], [b]) => a.localeCompare(b)).map(([destination, url]) =>
        `<li><a class="button secondary" href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc('Live departures and platforms from ' + station + ' to ' + destination)}">To ${esc(destination)} ↗</a></li>`).join('')}</ul></div>`).join('')}</section>`;
  }

  function renderHome(focusDay) {
    document.title = 'London trip guide';
    const nextHTML = `<div class="next-slot">${nextCardHTML()}</div>`;
    const days = trip.days.map(d => `<section class="day" id="${d.id}"><h2>${esc(d.label)}</h2><p class="day-summary">${esc(d.summary)}</p><ul class="items">${
      dayEntries(d).map(r => {
        if (r.journey) {
          const j = r.journey;
          return `<li><a class="item journey" href="${link('j=' + j.id)}" data-nav><span class="t">${esc(r.time)}</span><span class="label">${phrases(j.title)}</span><span class="chev" aria-hidden="true">›</span></a></li>`;
        }
        if (r.booking) {
          const b = r.booking;
          return `<li><a class="item" href="${link('j=' + (b.page || b.journey))}" data-nav><span class="t">${esc(b.start)}</span><span class="label">${phrases(b.title)}</span><span class="chev" aria-hidden="true">›</span></a></li>`;
        }
        return `<li><div class="item ${r.item.kind}"><span class="t">${esc(r.time)}</span><span class="label">${esc(r.item.title)}</span><span></span></div></li>`;
      }).join('')}</ul></section>`).join('');
    const dl = trip.days.map(d => `<li><a class="button secondary" href="downloads/${d.id}.pdf" download>${esc(d.label.split(' ')[0])} PDF</a></li>`).join('');
    app.innerHTML = `<div class="hero"><h1>${esc(trip.title)}</h1><p>${esc(trip.dates)}</p></div>${nextHTML}${days}
      <section class="downloads"><h2>Tickets</h2><a class="button secondary" href="?tickets" data-nav>View tickets (locked) ›</a></section>
      ${trainDeparturesHTML()}
      <section class="downloads"><h2>Backups</h2><ul>${dl}</ul>
      <p>Each PDF holds that day’s maps, station plans and directions. Save them to the phone in case the guide cannot load.</p></section>`;
    if (focusDay && document.getElementById(focusDay)) document.getElementById(focusDay).scrollIntoView();
  }

  // ------------------------------------------------------------ journey
  async function renderJourney(id, option) {
    const j = trip.journeys[id];
    if (!j) { app.innerHTML = `<p class="error">There is no journey called “${esc(id)}”. <a href="./" data-nav>See all days</a></p>`; return; }
    const day = dayOf(j.day);
    document.title = `${j.title} · London trip`;
    const maps = await mapsFor(id);
    const booked = trip.bookings.filter(b => b.journey === id);
    const facts = [`<span class="chip">${esc(j.time_label)}</span>`];
    booked.forEach(b => facts.push(b.page
      ? `<a class="chip booked" href="${link('j=' + b.page)}" data-nav>${esc(b.start)} ${esc(trip.journeys[b.page].title)} ›</a>`
      : `<span class="chip booked">${esc(b.start)} ${esc(b.title.split(' · ')[0])}</span>`));
    const next = j.next && trip.journeys[j.next];
    app.innerHTML = `<nav class="crumbs"><a href="${link('d=' + day.id)}" data-nav>‹ ${esc(day.label)}</a></nav>
      <header class="journey-head"><div class="day-label">${esc(day.label)}</div><h1>${esc(j.title)}</h1><div class="facts">${facts.join('')}</div>
      ${j.lead ? `<p class="lead">${esc(j.lead)}</p>` : ''}</header>
      <div class="sections">${j.kind === 'dinner' ? dinnerHTML(j) : j.kind === 'destination' ? destinationHTML(j) : sectionsHTML(j.sections, option, 'j=' + id)}</div>
      ${next ? `<div class="next-link"><a class="button secondary" href="${link('j=' + next.id)}" data-nav>Next · ${esc(next.time_label)} ${esc(next.title)} ›</a></div>` : ''}`;
    mountAll(app, maps, false);
    if (j.museum) mountMuseum(j.museum);
  }

  // Destination pages for bookings: what you need once you are there.
  function destinationHTML(j, print) {
    if (j.museum) return (print ? '' : `<section class="section ticket-link"><a class="button" href="${link('tickets&t=museum')}" data-nav>Tickets (locked) ›</a></section>`) + museumHTML(j.museum, print);
    const p = trip.places[j.place];
    const walk = j.walk && trip.journeys[j.walk];
    return `<section class="section destination">
      ${j.reminder ? `<p class="note reminder"><strong>Reminder:</strong> ${esc(j.reminder)}</p>` : ''}
      ${j.tickets && !print ? `<a class="button ticket-button" href="${link('tickets&t=' + j.tickets)}" data-nav>Tickets (locked) ›</a>` : ''}
      ${j.address ? `<p class="address">${esc(j.address)}</p>` : ''}
      ${(j.notes || []).map(n => `<p>${esc(n)}</p>`).join('')}
      ${(j.links || []).length ? `<ul class="dest-links">${j.links.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a></li>`).join('')}</ul>` : ''}
      ${j.navigate !== false && p ? `<a class="button" href="${navURL(p.coordinate)}" target="_blank" rel="noopener">Navigate to ${esc(j.title)}</a>` : ''}
      ${walk && !print ? `<a class="button secondary" href="${link('j=' + walk.id)}" data-nav>How to get there · ${esc(walk.title)} ›</a>` : ''}
    </section>`;
  }

  function museumHTML(m, print) {
    return `<section class="section museum-maps">
      ${!print ? `<div class="museum-floor-tabs" role="tablist" aria-label="Museum floor">${m.floors.map((f, i) => `<button type="button" role="tab" id="museum-tab-${f.id}" aria-controls="museum-floor-${f.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-museum-floor="${f.id}">${esc(f.label)}</button>`).join('')}</div>` : ''}
      ${m.floors.map((f, i) => `<div class="museum-floor" id="museum-floor-${f.id}"${!print ? ` role="tabpanel" aria-labelledby="museum-tab-${f.id}"${i ? ' hidden' : ''}` : ''}>
        ${print ? `<h3>${esc(f.label)}</h3>` : ''}<div class="map-box plan-box" data-plan="${f.plan}"><svg role="group" aria-label="${esc(f.label)} museum plan with numbered stops"></svg>
        <div class="map-tools"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="reset" aria-label="Reset plan">⟲</button><span class="sub">Drag · pinch or +/− to zoom</span></div>
        <div class="map-credit"><span>© 2026 Trustees of the British Museum</span><a href="downloads/british-museum-map.pdf" target="_blank" rel="noopener">Full official map ↗</a></div></div>
      </div>`).join('')}
      ${!print ? '<div class="museum-selected" aria-live="polite"></div>' : ''}
      <ol class="museum-map-key" aria-label="Stops in visit order">${m.stops.map(s => `<li><button type="button" data-museum-stop="${s.n}" aria-pressed="${s.n === 1}"${s.optional ? ' class="optional-pin"' : ''}><b>${s.n}</b><span><strong>${esc(s.title)}</strong><small>${esc(s.room)} · ${s.floor === 'ground' ? 'Ground' : 'Upper'}${s.optional ? ' · optional' : ''}</small></span></button></li>`).join('')}</ol>
      <a class="button secondary" href="downloads/british-museum-map.pdf" download>Download the full official floor plans</a></section>`;
  }

  function mountMuseum(m) {
    const root = app.querySelector('.museum-maps');
    function showFloor(id) {
      root.querySelectorAll('[data-museum-floor]').forEach(b => {
        const active = b.dataset.museumFloor === id;
        b.setAttribute('aria-selected', active); b.tabIndex = active ? 0 : -1;
      });
      root.querySelectorAll('.museum-floor').forEach(p => { p.hidden = p.id !== 'museum-floor-' + id; });
      const box = root.querySelector(`#museum-floor-${id} [data-plan]`);
      drawPlan(box, trip.plans[box.dataset.plan], false);
    }
    function select(n) {
      const s = m.stops.find(s => s.n === n);
      if (!s) return;
      if (root.querySelector(`#museum-floor-${s.floor}`).hidden) showFloor(s.floor);
      root.querySelectorAll('[data-museum-stop]').forEach(b => b.setAttribute('aria-pressed', +b.dataset.museumStop === n));
      root.querySelectorAll('[data-pin-stop]').forEach(p => p.classList.toggle('active', +p.dataset.pinStop === n));
      root.querySelector('.museum-selected').innerHTML = `<strong>${s.n}. ${esc(s.title)}</strong><span>${esc(s.room)} · ${s.floor === 'ground' ? 'Level 0' : 'Level 3'}${s.optional ? ' · optional' : ''}</span>`;
    }
    root.addEventListener('click', e => {
      const floor = e.target.closest('[data-museum-floor]');
      if (floor) { showFloor(floor.dataset.museumFloor); select(m.floors.find(f => f.id === floor.dataset.museumFloor).stops[0]); }
      const stop = e.target.closest('[data-museum-stop]');
      if (stop) select(+stop.dataset.museumStop);

    });
    root.addEventListener('museum-select', e => select(e.detail));
    root.querySelector('.museum-floor-tabs').addEventListener('keydown', e => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault();
      const buttons = [...root.querySelectorAll('[data-museum-floor]')];
      const current = buttons.indexOf(document.activeElement);
      const i = e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : (current + (e.key === 'ArrowLeft' ? -1 : 1) + buttons.length) % buttons.length;
      buttons[i].click(); buttons[i].focus();
    });
    select(1);
  }

  // Dinner pages: a curated list of places grouped by area (no maps or steps).
  function dinnerHTML(j) {
    const places = j.places || [];
    if (!places.length) return '<section class="section dinner"><p class="sub">Nothing added yet.</p></section>';
    const areas = [...new Set(places.map(p => p.area || 'Other'))];
    return (j.ranking_note ? `<p class="ranking-note">${esc(j.ranking_note)}</p>` : '') + areas.map(area => `<section class="section dinner"><h2>${esc(area)}</h2><ul class="places">${
      places.filter(p => (p.area || 'Other') === area).map(p => `<li><div><strong>${esc(p.name)}</strong>${p.description ? `<span>${esc(p.description)}</span>` : ''}${p.note ? `<span class="meta">${esc(p.note)}</span>` : ''}</div>
        <div class="place-links">${p.coordinate ? `<a href="${navURL(p.coordinate)}" target="_blank" rel="noopener">Navigate</a>` : ''}${p.url ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">Website</a>` : ''}</div></li>`).join('')}</ul></section>`).join('');
  }

  function sectionsHTML(sections, option, base, printAll) {
    return sections.map(s => sectionHTML(s, option, base, printAll)).join('');
  }

  function stepsHTML(steps) {
    if (!steps || !steps.length) return '';
    return `<ol class="steps">${steps.map((s, i) => `<li><span class="num">${i + 1}</span><div><strong>${esc(s.title)}</strong>${s.text ? `<p>${esc(s.text)}</p>` : ''}</div></li>`).join('')}</ol>`;
  }
  function mapBox(key, credit) {
    return `<div class="map-box" data-map="${key}"><svg role="img"></svg>
      <div class="map-tools"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="reset" aria-label="Reset map">⟲</button>
      <button type="button" class="locate" data-locate aria-pressed="false">Show my location</button></div>
      <div class="gps-status" role="status"></div>
      <div class="map-credit"><span>${credit}</span><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a></div></div>`;
  }

  function sectionHTML(s, option, base, printAll) {
    const place = k => trip.places[k];
    switch (s.type) {
      case 'walk': {
        const to = place(s.navigate || s.to);
        return `<section class="section walk"><h2>Walk to ${esc(s.to_label)}</h2><p class="sub">${esc(s.minutes)} · ${s.distance_m} m from ${esc(s.from_label)}</p>
          ${mapBox(s.map, 'Walking route')}${stepsHTML(s.steps)}
          <a class="button" href="${navURL(to.coordinate)}" target="_blank" rel="noopener">${esc(s.nav_label || 'Navigate to ' + to.name)}</a></section>`;
      }
      case 'place': {
        const p = place(s.place);
        return `<section class="section place"><h2>${esc(p.name)}</h2>${mapBox(s.map, 'Entrance')}${stepsHTML(s.steps)}
          <a class="button" href="${navURL(p.coordinate)}" target="_blank" rel="noopener">${esc(s.nav_label || 'Navigate to ' + p.name)}</a></section>`;
      }
      case 'plan': {
        const p = trip.plans[s.plan];
        return `<section class="section plan"><h2>${esc(p.title)}</h2><p class="sub">${esc(p.subtitle)}</p>
          <div class="map-box plan-box" data-plan="${s.plan}"><svg role="img" aria-label="${esc(p.title)} plan with the route highlighted"></svg>
          <div class="map-tools"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="reset" aria-label="Reset plan">⟲</button><span class="sub" style="margin:0;font-size:13px">Drag to move · pinch or +/− to zoom</span></div>
          <div class="map-credit"><span>${esc(p.subtitle.split(' · ').pop())}</span><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.credit)} ↗</a></div></div>
          <ul class="legend">${p.legend.map((l, i) => `<li><b>${i + 1}</b>${esc(l)}</li>`).join('')}</ul>
          <p class="plan-text">${p.text}</p></section>`;
      }
      case 'rail': {
        const timed = s.services.some(x => x.dep);
        const rows = s.services.map(x => {
          const live = x.live_departures_url ? `<a class="live-departures" href="${esc(x.live_departures_url)}" target="_blank" rel="noopener" aria-label="${esc('Live departures and platforms from ' + x.from + ' to ' + x.to)}">Live departures &amp; platforms ↗</a>` : '';
          return timed
            ? `<div class="tt">${esc(x.dep)}</div><div class="tp">${esc(x.from)}<span>${esc(x.line)} to ${esc(x.to)} · ${esc(x.detail)}</span>${live}</div><div class="tt">${esc(x.arr)}</div><div class="tp">${esc(x.to)}<span>Arrive</span></div>`
            : `<div class="tp">${esc(x.from)} → ${esc(x.to)}<span>${esc(x.line)} · ${esc(x.detail)}</span>${live}</div>`;
        }).join('');
        return `<section class="section rail"><h2>${esc(s.title)}</h2>${timed ? '<p class="sub">Planned timetable. Check the departure screens on the day.</p>' : '<p class="sub">Check the departure screens for times and platforms.</p>'}
          <div class="timeline${timed ? '' : ' untimed'}">${rows}</div>${s.fallback ? `<p class="note">${esc(s.fallback)}</p>` : ''}
          ${mapBox(s.map, 'Railway line (illustrative)')}</section>`;
      }
      case 'steps':
        return `<section class="section"><h2>${esc(s.title)}</h2>${stepsHTML(s.steps)}</section>`;
      case 'links':
        return `<section class="section"><h2>${esc(s.title)}</h2><ul class="links">${s.places.map(k => `<li><span>${esc(place(k).name)}</span><a href="${navURL(place(k).coordinate)}" target="_blank" rel="noopener">Navigate ›</a></li>`).join('')}</ul></section>`;
      case 'optional': {
        if (!s.stops || !s.stops.length) return '';
        const when = x => x.closed ? 'Closed that day' : x.opens_later ? `Opens ${x.opens}` : `Open until ${x.closes}`;
        return `<details class="optional"${printAll ? ' open' : ''}><summary>Optional bookshops · ${esc(s.title.charAt(0).toLowerCase() + s.title.slice(1))} (${s.stops.length})</summary>
          <p class="sub">Only if there is time. Not part of the plan.</p><ul>${s.stops.map(x => `<li><div><strong>${esc(x.name)}</strong>
          <span>${esc(x.description)}</span><span class="meta">${when(x)} · ${x.approx ? `adds roughly ${x.detour_min} min to the walk` : `adds about ${x.detour_min} min to the walk`}</span></div>
          <a href="${navURL(x.coordinate)}" target="_blank" rel="noopener">Navigate</a></li>`).join('')}</ul></details>`;
      }
      case 'cruise':
        return `<section class="section"><h2>${esc(s.title)}</h2><p class="sub">${esc(s.text)}</p>${mapBox(s.map, 'River Thames')}</section>`;
      case 'options': {
        if (printAll) return s.options.map(o => `<section class="section"><h2>Option · ${esc(o.label)}</h2></section>${sectionsHTML(o.sections, 0, base, true)}`).join('');
        const sel = Math.min(Math.max(option, 0), s.options.length - 1);
        return `<div class="tabs" role="tablist">${s.options.map((o, i) => `<button type="button" role="tab" aria-selected="${i === sel}" data-option="${i}" data-base="${esc(base)}">${esc(o.label)}</button>`).join('')}</div>
          ${sectionsHTML(s.options[sel].sections, 0, base)}`;
      }
    }
    return '';
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-option]');
    if (!b) return;
    go(`?${b.dataset.base}&o=${b.dataset.option}`, true);
  });

  // ------------------------------------------------------------ maps
  function mountAll(root, maps, still) {
    root.querySelectorAll('[data-map]').forEach(box => drawGeo(box, maps[box.dataset.map], still));
    root.querySelectorAll('[data-plan]').forEach(box => drawPlan(box, trip.plans[box.dataset.plan], still));
  }

  // extent: pannable area in the content's own units (screen units for outdoor
  // maps, image pixels / PDF points for station plans).
  // alwaysDrag: one finger always moves the content (station plans); otherwise
  // one finger scrolls the page until the map is zoomed in (outdoor maps).
  function zoomable(svg, w, h, content, overlay, minK, maxK, initial, still, box, extent, alwaysDrag) {
    const zoomed = () => d3.zoomTransform(svg.node()).k > initial.k * 1.01;
    const zoom = d3.zoom().scaleExtent([minK, maxK]).extent([[0, 0], [w, h]]).translateExtent(extent)
      .filter(ev => {
        if (ev.type === 'wheel') return ev.ctrlKey;
        if (ev.type === 'dblclick') return true;
        if (ev.touches) return alwaysDrag || ev.touches.length > 1 || zoomed();
        return !ev.button;
      })
      .on('zoom', ev => {
        content.attr('transform', ev.transform);
        overlay(ev.transform);
        if (!alwaysDrag) svg.style('touch-action', ev.transform.k > initial.k * 1.01 ? 'none' : 'pan-y');
      });
    if (still) { content.attr('transform', initial); overlay(initial); return; }
    svg.call(zoom).call(zoom.transform, initial).on('dblclick.zoom', null);
    svg.style('touch-action', alwaysDrag ? 'none' : 'pan-y');
    box.querySelectorAll('[data-zoom]').forEach(b => b.onclick = () => {
      const kind = b.dataset.zoom;
      if (kind === 'reset') svg.transition().duration(200).call(zoom.transform, initial);
      else svg.transition().duration(200).call(zoom.scaleBy, kind === 'in' ? 1.6 : 1 / 1.6, [w / 2, h / 2]);
    });
  }

  function drawGeo(box, m, still) {
    if (!m) return;
    const svgEl = box.querySelector('svg');
    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();
    const w = Math.max(280, Math.round(box.clientWidth || 360));
    const span = (m.bounds[3] - m.bounds[1]) * 111200 / ((m.bounds[2] - m.bounds[0]) * 69300);
    const h = Math.round(Math.min(Math.max(w * span, w * 0.7), w * 1.15, 480));
    svg.attr('viewBox', `0 0 ${w} ${h}`).attr('height', h).classed('regional', m.kind === 'rail' || m.kind === 'cruise');
    const [W, S, E, N] = m.bounds;
    const frame = {type: 'MultiPoint', coordinates: [[W, S], [E, N]]};
    const projection = d3.geoMercator().fitExtent([[0, 0], [w, h]], frame);
    const path = d3.geoPath(projection);
    svgEl.setAttribute('aria-label', {walk: 'Walking route map', place: 'Entrance location map', rail: 'Railway route map', cruise: 'River cruise map'}[m.kind]);
    const content = svg.append('g');
    const order = ['park', 'water', 'waterline', 'thames', 'building', 'path', 'minor', 'major'];
    const base = [...m.base].sort((a, b) => order.indexOf(a.properties.kind) - order.indexOf(b.properties.kind));
    base.forEach(f => {
      content.append('path').attr('class', f.properties.kind).attr('d', path(f));
      if (f.properties.kind === 'major' && m.kind !== 'rail' && m.kind !== 'cruise') content.append('path').attr('class', 'major-fill').attr('d', path(f));
    });
    if (m.route) {
      content.append('path').attr('class', 'casing').attr('d', path(m.route));
      content.append('path').attr('class', 'route').attr('d', path(m.route));
    }
    (m.corridors || []).forEach(f => {
      content.append('path').attr('class', 'casing').attr('d', path(f));
      content.append('path').attr('class', 'rail ' + f.properties.network).attr('d', path(f));
    });
    const overlay = svg.append('g');
    const points = [];
    (m.stations || []).forEach(st => points.push({xy: projection(st.coordinate), station: st}));
    const pinOrder = p => p.shop ? 0 : p.minor ? 1 : 2;  // planned pins drawn last, on top
    [...(m.pins || [])].sort((a, b) => pinOrder(a) - pinOrder(b)).forEach(p => points.push({xy: projection(p.coordinate), pin: p}));
    const nodes = points.map(pt => {
      const g = overlay.append('g');
      if (pt.station) {
        g.append('circle').attr('class', 'station-dot' + (pt.station.major ? ' major' : '')).attr('r', pt.station.major ? 6 : 4);
        if (pt.station.major) g.append('text').attr('class', 'label').attr('x', 10).attr('y', 4).text(pt.station.name);
      } else {
        const p = pt.pin;
        g.attr('class', 'pin' + (p.shop ? ' shop' : p.minor ? ' minor' : ''));
        g.append('circle').attr('r', p.shop ? 4 : p.minor ? 7 : 12);
        if (!p.minor && !p.shop) g.append('text').attr('class', 'n').attr('text-anchor', 'middle').attr('y', 4.5).text(p.n);
        g.append('text').attr('class', 'label' + (p.shop ? ' shop' : p.minor ? ' small' : '')).attr('x', p.shop ? 7 : p.minor ? 10 : 16).attr('y', 4).text(p.label);
      }
      return {g, pt};
    });
    const me = overlay.append('g').attr('display', 'none');
    me.append('circle').attr('class', 'me-accuracy');
    me.append('circle').attr('class', 'me').attr('r', 7);
    let fix = null;
    function place(t) {
      // Planned pins and their labels claim space first; on-the-way shop labels
      // then take the first free spot (right, left, below, above) or hide.
      const boxes = [];
      const overlaps = b => b.x < 2 || b.x + b.w > w - 2 || boxes.some(o => b.x < o.x + o.w && o.x < b.x + b.w && b.y < o.y + o.h && o.y < b.y + b.h);
      const boxOf = (label, x, y) => { const b = label.node().getBBox(); return {x: b.x + x - 2, y: b.y + y - 1, w: b.width + 4, h: b.height + 2}; };
      const shopFirst = nodes.filter(n => !(n.pt.pin && n.pt.pin.shop)).concat(nodes.filter(n => n.pt.pin && n.pt.pin.shop));
      shopFirst.forEach(({g, pt}) => {
        const [x, y] = t.apply(pt.xy);
        g.attr('transform', `translate(${x},${y})`);
        const r = pt.pin ? (pt.pin.shop ? 4 : pt.pin.minor ? 7 : 12) : 6;
        const label = g.select('text.label');
        if (!label.empty()) {
          const len = label.node().getComputedTextLength();
          if (pt.pin && pt.pin.shop) {
            const spots = [['start', 7, 4], ['end', -7, 4], ['start', -4, 16], ['start', -4, -8]];
            const free = spots.find(([anchor, dx, dy]) => {
              label.attr('display', null).attr('text-anchor', anchor).attr('x', dx).attr('y', dy);
              return !overlaps(boxOf(label, x, y));
            });
            if (free) boxes.push(boxOf(label, x, y)); else label.attr('display', 'none');
          } else {
            const right = x + 16 + len < w - 6;
            const gap = pt.pin && pt.pin.minor ? 10 : pt.pin ? 16 : 10;
            label.attr('text-anchor', right ? 'start' : 'end').attr('x', right ? gap : -gap);
            boxes.push(boxOf(label, x, y));
          }
        }
        boxes.push({x: x - r, y: y - r, w: 2 * r, h: 2 * r});
      });
      if (fix) {
        const [x, y] = t.apply(projection(fix.coord));
        const metresPerPx = (E - W) * 69300 / w / t.k;
        me.attr('display', null).attr('transform', `translate(${x},${y})`);
        me.select('.me-accuracy').attr('r', Math.min(200, fix.accuracy / metresPerPx));
      }
    }
    svg.append('text').attr('class', 'north').attr('x', w - 12).attr('y', 22).attr('text-anchor', 'end').text('N ↑');
    let current = d3.zoomIdentity;
    zoomable(svg, w, h, content, t => { current = t; place(t); }, 1, 8, d3.zoomIdentity, still, box,
      [[-w * 0.1, -h * 0.1], [w * 1.1, h * 1.1]], false);
    if (still) return;
    // Location: only after the traveller asks for it.
    const status = box.querySelector('.gps-status');
    const button = box.querySelector('[data-locate]');
    button.onclick = () => {
      if (button.getAttribute('aria-pressed') === 'true') { stopLocate(); return; }
      if (!window.isSecureContext || !navigator.geolocation) { status.textContent = 'Location needs the secure (https) guide address.'; return; }
      button.setAttribute('aria-pressed', 'true'); button.textContent = 'Hide my location';
      status.textContent = 'Finding your location…';
      const watch = navigator.geolocation.watchPosition(pos => {
        const c = [pos.coords.longitude, pos.coords.latitude];
        fix = {coord: c, accuracy: pos.coords.accuracy};
        const inside = c[0] >= W && c[0] <= E && c[1] >= S && c[1] <= N;
        const centre = [(W + E) / 2, (S + N) / 2];
        const km = Math.hypot((c[0] - centre[0]) * 69.3, (c[1] - centre[1]) * 111.2);
        status.textContent = inside ? `You are here (accurate to about ${Math.round(pos.coords.accuracy)} m).` : `You are about ${km < 10 ? km.toFixed(1) : Math.round(km)} km from this map.`;
        me.attr('display', inside ? null : 'none');
        if (inside) place(current);
      }, err => {
        status.textContent = err.code === 1 ? 'Location is blocked for this site. Allow it in the browser’s site settings, or use the Navigate button.' : 'Your location is not available right now. The Navigate button still works.';
        stopLocate(true);
      }, {enableHighAccuracy: true, maximumAge: 15000, timeout: 30000});
      const stop = () => navigator.geolocation.clearWatch(watch);
      cleanup.push(stop);
      box._stop = stop;
    };
    function stopLocate(keepStatus) {
      if (box._stop) box._stop();
      fix = null; me.attr('display', 'none');
      button.setAttribute('aria-pressed', 'false'); button.textContent = 'Show my location';
      if (!keepStatus) status.textContent = '';
    }
  }

  function drawPlan(box, p, still) {
    const svgEl = box.querySelector('svg');
    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();
    const w = Math.max(280, Math.round(box.clientWidth || 360));
    const h = Math.round(w * (p.aspect || Math.min(p.height / p.width, 1.3)));
    svg.attr('viewBox', `0 0 ${w} ${h}`).attr('height', h);
    svg.append('title').text(`${p.title}: ${p.legend.join(' → ')}`);
    const content = svg.append('g');
    content.append('image').attr('href', p.src).attr('width', p.width).attr('height', p.height);
    (p.highlights || []).forEach(e => content.append('ellipse').attr('class', 'plan-highlight').attr('cx', e.cx).attr('cy', e.cy).attr('rx', e.rx).attr('ry', e.ry));
    if (p.path) {
      content.append('path').attr('class', 'plan-route-halo').attr('d', p.path);
      content.append('path').attr('class', 'plan-route').attr('d', p.path);
    }
    const overlay = svg.append('g');
    const pins = p.pins.map((xy, i) => {
      const g = overlay.append('g').attr('class', 'pin' + (p.optionalNumbers && p.optionalNumbers.includes(p.numbers[i]) ? ' optional-pin' : ''));
      g.append('circle').attr('r', 12);
      g.append('text').attr('class', 'n').attr('text-anchor', 'middle').attr('y', 4.5).text(p.numbers ? p.numbers[i] : i + 1);
      if (p.stopIds && !still) {
        g.attr('data-pin-stop', p.stopIds[i]).attr('role', 'button').attr('tabindex', 0).attr('aria-label', `${p.numbers[i]}. ${p.legend[i]}`);
        const choose = () => box.dispatchEvent(new CustomEvent('museum-select', {bubbles: true, detail: p.stopIds[i]}));
        g.on('click', choose).on('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); } });
      }
      return {g, xy};
    });
    const fit = Math.min(w / p.width, h / p.height);
    const [x0, y0, x1, y1] = p.initial || [0, 0, p.width, p.height];
    const k = Math.min(w / (x1 - x0), h / (y1 - y0));
    const initial = d3.zoomIdentity.translate(w / 2 - k * (x0 + x1) / 2, h / 2 - k * (y0 + y1) / 2).scale(k);
    zoomable(svg, w, h, content, t => pins.forEach(({g, xy}) => {
      const [x, y] = t.apply(xy); g.attr('transform', `translate(${x},${y})`);
    }), Math.min(fit, k), k * 6, initial, still, box,
      [[-p.width * 0.05, -p.height * 0.05], [p.width * 1.05, p.height * 1.05]], true);
  }

  // ------------------------------------------------------------ tickets (encrypted)
  // The published files are AES-GCM ciphertext. The password is typed once; the
  // derived key is then kept in this browser so the tickets open without typing.
  const TICKET_KEY = 'london-trip-ticket-key';
  const fromB64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const toB64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
  const normalisePassword = p => p.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.!]+$/, '');
  const storedKey = () => { try { return localStorage.getItem(TICKET_KEY); } catch (e) { return null; } };
  async function decryptTickets(meta, key) {
    return Promise.all(meta.items.map(async item => {
      const res = await fetch(item.file);
      if (!res.ok) throw new Error('missing ' + item.file);
      const plain = await crypto.subtle.decrypt({name: 'AES-GCM', iv: fromB64(item.iv)}, key, await res.arrayBuffer());
      return {...item, url: URL.createObjectURL(new Blob([plain], {type: item.type}))};
    }));
  }
  async function renderTickets() {
    document.title = 'Tickets · London trip';
    const head = `<nav class="crumbs"><a href="./" data-nav>‹ All days</a></nav><header class="journey-head"><h1>Tickets</h1></header>`;
    if (!window.isSecureContext || !crypto.subtle) { app.innerHTML = head + '<section class="section"><p>Tickets open only on the secure (https) guide address.</p></section>'; return; }
    const meta = await getJSON('tickets/tickets.json');
    const show = items => {
      const qrs = items.filter(i => i.type.startsWith('image/'));
      const pdf = items.find(i => i.type === 'application/pdf');
      app.innerHTML = head + `<section class="section tickets">${qrs.map(q => `<figure class="ticket-qr"${q.anchor ? ` id="ticket-${esc(q.anchor)}"` : ''}><figcaption>${q.group ? `<small>${esc(q.group)}</small>` : ''}${esc(q.label)}</figcaption><img src="${q.url}" alt="${esc((q.group ? q.group + ', ' : '') + q.label)} ticket QR code"></figure>`).join('')}
        ${pdf ? `<a class="button" href="${pdf.url}" download="${esc(pdf.download || 'tickets.pdf')}">Download ${esc(pdf.label)}</a>` : ''}
        <p class="sub">Turn the screen brightness up for scanning.</p>
        <button type="button" class="button secondary" data-forget>Forget the password on this phone</button></section>`;
      const target = params().get('t') && document.getElementById('ticket-' + params().get('t'));
      if (target) requestAnimationFrame(() => target.scrollIntoView());
      app.querySelector('[data-forget]').onclick = () => { try { localStorage.removeItem(TICKET_KEY); } catch (e) {} renderTickets(); };
    };
    const saved = storedKey();
    if (saved) {
      try {
        const key = await crypto.subtle.importKey('raw', fromB64(saved), 'AES-GCM', false, ['decrypt']);
        show(await decryptTickets(meta, key));
        return;
      } catch (e) { try { localStorage.removeItem(TICKET_KEY); } catch (x) {} }
    }
    app.innerHTML = head + `<section class="section tickets"><form class="unlock" autocomplete="on">
      <label for="ticket-password">Password</label>
      <input id="ticket-password" type="password" autocomplete="current-password" autocapitalize="none" autocorrect="off" spellcheck="false" required>
      <button type="submit" class="button">Unlock tickets</button><p class="sub unlock-status" role="status">Type it once; this phone will remember it.</p></form></section>`;
    const form = app.querySelector('.unlock');
    form.onsubmit = async ev => {
      ev.preventDefault();
      const status = form.querySelector('.unlock-status');
      status.textContent = 'Unlocking…';
      try {
        const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(normalisePassword(form.querySelector('input').value)), 'PBKDF2', false, ['deriveKey']);
        const key = await crypto.subtle.deriveKey({name: 'PBKDF2', hash: meta.kdf.hash, salt: fromB64(meta.kdf.salt), iterations: meta.kdf.iterations},
          base, {name: 'AES-GCM', length: 256}, true, ['decrypt']);
        const items = await decryptTickets(meta, key);
        try { localStorage.setItem(TICKET_KEY, toB64(await crypto.subtle.exportKey('raw', key))); } catch (e) {}
        show(items);
      } catch (e) {
        status.textContent = 'That password didn’t work. Check the words and try again.';
      }
    };
  }

  // ------------------------------------------------------------ print (PDF backups)
  async function renderPrint(dayId) {
    const day = dayOf(dayId);
    if (!day) throw new Error('No such day');
    document.title = `${day.label} · London trip`;
    const journeys = day.items.filter(i => i.journey).map(i => trip.journeys[i.journey])
      .concat(Object.values(trip.journeys).filter(j => j.kind === 'destination' && j.day === dayId));
    const all = await Promise.all(journeys.map(j => mapsFor(j.id)));
    const rows = dayEntries(day).map(r => `<li><div class="item"><span class="t">${esc(r.time)}</span><span class="label">${esc(r.journey ? r.journey.title : r.booking ? r.booking.title : r.item.title)}</span><span></span></div></li>`).join('');
    app.innerHTML = `<div class="print-day hero"><h1>${esc(day.label)}</h1><p>${esc(day.summary)} · London trip ${esc(trip.dates)}</p></div><ul class="items">${rows}</ul>` +
      journeys.map((j, n) => `<div class="print-journey" data-pj="${n}"><header class="journey-head"><div class="day-label">${esc(day.label)} · ${esc(j.time_label)}</div><h1>${esc(j.title)}</h1>${j.lead ? `<p class="lead">${esc(j.lead)}</p>` : ''}</header>${j.kind === 'dinner' ? dinnerHTML(j) : j.kind === 'destination' ? destinationHTML(j, true) : sectionsHTML(j.sections, 0, 'j=' + j.id, true)}</div>`).join('');
    app.querySelectorAll('[data-pj]').forEach(el => mountAll(el, all[+el.dataset.pj], true));
    document.body.dataset.ready = 'true';
  }

  // ------------------------------------------------------------ offline
  function offlineStatus(text) {
    const el = document.querySelector('.offline-status');
    el.hidden = !text; el.textContent = text || '';
  }
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
    navigator.serviceWorker.addEventListener('message', e => { if (e.data && e.data.type === 'cached') offlineStatus('Saved for offline'); });
    navigator.serviceWorker.ready.then(reg => reg.active && reg.active.postMessage({type: 'status'}));
  }
  window.addEventListener('offline', () => offlineStatus('Offline · using saved copy'));
  window.addEventListener('online', () => offlineStatus(''));

  // Re-draw maps when the screen width changes (rotation, split screen).
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (Math.abs(window.innerWidth - lastWidth) < 40) return;
    lastWidth = window.innerWidth;
    if (params().get('j')) render(false);
  });

  getJSON('data/trip.json').then(data => { trip = data; render(false); })
    .catch(() => { app.innerHTML = '<p class="error">The trip guide could not be loaded. Check the connection and reload, or open the saved PDF backup.</p>'; });
})();
