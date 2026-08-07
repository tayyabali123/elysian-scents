// Nav scroll state
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Intersection-based reveal animations
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in-view'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-up, .reveal-down, .reveal-image')
  .forEach(el => io.observe(el));

// Subtle parallax on hero image
const heroImg = document.querySelector('.hero-image img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 800) heroImg.style.transform = `translateY(${y * 0.08}px) scale(1.02)`;
  }, { passive: true });
}

// Heart toggle
document.querySelectorAll('.heart').forEach(h => {
  h.addEventListener('click', () => {
    h.style.color = h.style.color === 'rgb(184, 150, 90)' ? '' : '#b8965a';
    h.innerHTML = h.innerHTML.trim() === '♡' ? '♥' : '♡';
  });
});
