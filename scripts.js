// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Intersection observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Email obfuscation — assembled at runtime so scrapers can't read it
window.addEventListener('DOMContentLoaded', () => {
  const u = 'adam';
  const d = 'trinityrivermgmt.com';
  const link = document.getElementById('email-link');
  link.href = 'mailto:' + u + '@' + d;
  link.textContent = u + '@' + d;
});
