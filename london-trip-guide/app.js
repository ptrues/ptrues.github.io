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
  const sortKey = t => { const m = /^(\d\d):(\d\d)/.exec(t || ''); return m ? +m[1] * 60 + +m[2] : (t === 'Evening' ? 19 * 60 : 24 * 60); };

  async function getJSON(url) {
    const res = await fetch(url);
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
    const p = params();
    try {
      if (p.get('print')) await renderPrint(p.get('print'));
      else if (p.get('j')) await renderJourney(p.get('j'), +(p.get('o') || 0));
      else renderHome(p.get('d'));
    } catch (err) {
      console.error(err);
      app.innerHTML = `<p class="error">This page could not be loaded. ${navigator.onLine ? '' : 'You appear to be offline. '}<a href="./" data-nav>Back to all days</a></p>`;
    }
    if (scrollTop) window.scrollTo(0, 0);
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
  function nextJourney() {
    const now = londonNow();
    const list = trip.days.flatMap(d => d.items.filter(i => i.journey).map(i => trip.journeys[i.journey]))
      .filter(j => j.start).map(j => ({j, at: `${dayOf(j.day).date}T${j.start}`, until: `${dayOf(j.day).date}T${j.end || j.start}`}));
    return list.find(x => x.until >= now) || null;
  }
  function renderHome(focusDay) {
    document.title = 'London trip guide';
    const next = nextJourney();
    const now = londonNow();
    let nextHTML = '';
    if (next) {
      const d = dayOf(next.j.day);
      const live = next.at <= now;
      nextHTML = `<a class="next-card" href="${link('j=' + next.j.id)}" data-nav><span class="eyebrow">${live ? 'Now' : 'Next'}</span>
        <strong>${esc(next.j.title)}</strong><span class="when">${esc(d.label)} · ${esc(next.j.time_label)}</span></a>`;
    }
    const days = trip.days.map(d => `<section class="day" id="${d.id}"><h2>${esc(d.label)}</h2><p class="day-summary">${esc(d.summary)}</p><ul class="items">${
      dayEntries(d).map(r => {
        if (r.journey) {
          const j = r.journey;
          return `<li><a class="item journey" href="${link('j=' + j.id)}" data-nav><span class="t">${esc(r.time)}</span><span class="label">${esc(j.title)}${j.status === 'open' ? ' <span class="chip open">Not chosen yet</span>' : ''}</span><span class="chev" aria-hidden="true">›</span></a></li>`;
        }
        if (r.booking) {
          const b = r.booking;
          return `<li><a class="item" href="${link('j=' + b.journey)}" data-nav><span class="t">${esc(b.start)}</span><span class="label">${esc(b.title)}</span><span class="chev" aria-hidden="true">›</span></a></li>`;
        }
        return `<li><div class="item ${r.item.kind}"><span class="t">${esc(r.time)}</span><span class="label">${esc(r.item.title)}</span><span></span></div></li>`;
      }).join('')}</ul></section>`).join('');
    const dl = trip.days.map(d => `<li><a class="button secondary" href="downloads/${d.id}.pdf" download>${esc(d.label.split(' ')[0])} PDF</a></li>`).join('');
    app.innerHTML = `<div class="hero"><h1>${esc(trip.title)}</h1><p>${esc(trip.dates)}</p></div>${nextHTML}${days}
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
    if (j.status === 'open') facts.push('<span class="chip open">Not chosen yet</span>');
    booked.forEach(b => facts.push(`<span class="chip booked">${esc(b.start)} ${esc(b.title.split(' · ')[0])}</span>`));
    const next = j.next && trip.journeys[j.next];
    app.innerHTML = `<nav class="crumbs"><a href="${link('d=' + day.id)}" data-nav>‹ ${esc(day.label)}</a></nav>
      <header class="journey-head"><div class="day-label">${esc(day.label)}</div><h1>${esc(j.title)}</h1><div class="facts">${facts.join('')}</div>
      ${j.lead ? `<p class="lead">${esc(j.lead)}</p>` : ''}</header>
      <div class="sections">${sectionsHTML(j.sections, option, 'j=' + id)}</div>
      ${next ? `<div class="next-link"><a class="button secondary" href="${link('j=' + next.id)}" data-nav>Next · ${esc(next.time_label)} ${esc(next.title)} ›</a></div>` : ''}`;
    mountAll(app, maps, false);
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
        const rows = s.services.map(x => timed
          ? `<div class="tt">${esc(x.dep)}</div><div class="tp">${esc(x.from)}<span>${esc(x.line)} to ${esc(x.to)} · ${esc(x.detail)}</span></div><div class="tt">${esc(x.arr)}</div><div class="tp">${esc(x.to)}<span>Arrive</span></div>`
          : `<div class="tp">${esc(x.from)} → ${esc(x.to)}<span>${esc(x.line)} · ${esc(x.detail)}</span></div>`).join('');
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
        const when = x => x.opens_later ? `Opens ${x.opens}` : x.closes_early ? `Closes ${x.closes}` : `Open until ${x.closes}`;
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
    (m.pins || []).forEach(p => points.push({xy: projection(p.coordinate), pin: p}));
    const nodes = points.map(pt => {
      const g = overlay.append('g');
      if (pt.station) {
        g.append('circle').attr('class', 'station-dot' + (pt.station.major ? ' major' : '')).attr('r', pt.station.major ? 6 : 4);
        if (pt.station.major) g.append('text').attr('class', 'label').attr('x', 10).attr('y', 4).text(pt.station.name);
      } else {
        const p = pt.pin;
        g.attr('class', 'pin' + (p.minor ? ' minor' : ''));
        g.append('circle').attr('r', p.minor ? 7 : 12);
        if (!p.minor) g.append('text').attr('class', 'n').attr('text-anchor', 'middle').attr('y', 4.5).text(p.n);
        g.append('text').attr('class', 'label' + (p.minor ? ' small' : '')).attr('x', p.minor ? 10 : 16).attr('y', 4.5).text(p.label);
      }
      return {g, pt};
    });
    const me = overlay.append('g').attr('display', 'none');
    me.append('circle').attr('class', 'me-accuracy');
    me.append('circle').attr('class', 'me').attr('r', 7);
    let fix = null;
    function place(t) {
      nodes.forEach(({g, pt}) => {
        const [x, y] = t.apply(pt.xy);
        g.attr('transform', `translate(${x},${y})`);
        const label = g.select('text.label');
        if (!label.empty()) {
          const len = label.node().getComputedTextLength();
          const right = x + 16 + len < w - 6;
          label.attr('text-anchor', right ? 'start' : 'end').attr('x', right ? (pt.pin && pt.pin.minor ? 10 : 16) : -(pt.pin && !pt.pin.minor ? 16 : 10));
        }
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
      const g = overlay.append('g').attr('class', 'pin');
      g.append('circle').attr('r', 12);
      g.append('text').attr('class', 'n').attr('text-anchor', 'middle').attr('y', 4.5).text(i + 1);
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

  // ------------------------------------------------------------ print (PDF backups)
  async function renderPrint(dayId) {
    const day = dayOf(dayId);
    if (!day) throw new Error('No such day');
    document.title = `${day.label} · London trip`;
    const journeys = day.items.filter(i => i.journey).map(i => trip.journeys[i.journey]);
    const all = await Promise.all(journeys.map(j => mapsFor(j.id)));
    const rows = dayEntries(day).map(r => `<li><div class="item"><span class="t">${esc(r.time)}</span><span class="label">${esc(r.journey ? r.journey.title : r.booking ? r.booking.title : r.item.title)}</span><span></span></div></li>`).join('');
    app.innerHTML = `<div class="print-day hero"><h1>${esc(day.label)}</h1><p>${esc(day.summary)} · London trip ${esc(trip.dates)}</p></div><ul class="items">${rows}</ul>` +
      journeys.map((j, n) => `<div class="print-journey" data-pj="${n}"><header class="journey-head"><div class="day-label">${esc(day.label)} · ${esc(j.time_label)}</div><h1>${esc(j.title)}</h1>${j.lead ? `<p class="lead">${esc(j.lead)}</p>` : ''}</header>${sectionsHTML(j.sections, 0, 'j=' + j.id, true)}</div>`).join('');
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
