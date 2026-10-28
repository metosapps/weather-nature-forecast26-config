(() => {
  const gallery = document.getElementById('screenshot-gallery');
  const previous = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  if (!gallery || !previous || !next) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function update() {
    previous.disabled = gallery.scrollLeft < 4;
    next.disabled = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 4;
  }
  function move(direction) {
    const first = gallery.querySelector('a');
    const step = first ? first.getBoundingClientRect().width + parseFloat(getComputedStyle(gallery).gap || '0') : gallery.clientWidth;
    gallery.scrollBy({left: direction * step, behavior: reduceMotion.matches ? 'instant' : 'smooth'});
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  gallery.addEventListener('scroll', update, {passive:true});
  window.addEventListener('resize', update);
  update();
})();
