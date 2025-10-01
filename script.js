// Smooth scroll for in-page nav (extra easing control for older browsers)
document.addEventListener('click', function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const href = target.getAttribute('href');
  if (href === '#' || href === '#topo') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Clients marquee removed

// Cases carousel removed

// Header removed

// VSL removed


