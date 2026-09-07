import { ensureLib, instantiateCandidate, safeRedirect } from '/biggerpicture.js';

let overlayInstance = null;

/* Collect the images the lightbox should be able to page through.

   Any element carrying `data-bp-gallery` groups the `a[data-bp][data-img]`
   links inside it into one carousel; a link outside such a container opens on
   its own. Bigger Picture takes the whole group as `items` and uses `el` to
   work out which one was clicked, so arrows, swipe and the thumbnail strip all
   come for free. */
function galleryFor(link) {
  const group = link.closest('[data-bp-gallery]');
  if (!group) return [link];
  const items = [...group.querySelectorAll('a[data-bp][data-img]')];
  return items.includes(link) ? items : [link];
}

document.addEventListener('click', async (e) => {
  const link = e.target.closest('a[data-bp][data-img]');
  if (!link) return;
  e.preventDefault();

  try {
    const Loaded = await ensureLib();
    const Candidate = Loaded?.default ?? Loaded?.BiggerPicture ?? Loaded;

    if (!overlayInstance) {
      overlayInstance = await instantiateCandidate(Candidate, document.body, {});
      if (!overlayInstance || typeof overlayInstance.open !== 'function') {
        throw new TypeError('BiggerPicture overlay instance missing open()');
      }
    }

    /* No scroll save/restore here on purpose. The page used to jump to the top
       on open, and this listener put it back in an `onClosed` handler that ran
       after the 480ms close transition -- which is the visible lurch that fix
       was meant to hide. The cause was Bigger Picture's `.bp-lock body` rule;
       it is neutralised in style.css, so the position simply never moves. */
    overlayInstance.open({
      items: galleryFor(link),
      el: link,
    });
  } catch (err) {
    console.error('bp-responsive init/open error:', err);
    safeRedirect(link.href);
  }
});
