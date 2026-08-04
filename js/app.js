// Año en footer
const elFecha = document.getElementById('fecha');
if (elFecha) elFecha.textContent = new Date().getFullYear();

// Menú mobile
const menuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navegacion-principal');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('mostrar');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav
    .querySelectorAll('a')
    .forEach((l) => l.addEventListener('click', () => nav.classList.remove('mostrar')));
}

// IntersectionObserver — reemplaza AOS
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.fade-up, .proyecto-item').forEach((el) => io.observe(el));
} else {
  document
    .querySelectorAll('.fade-up, .proyecto-item')
    .forEach((el) => el.classList.add('visible'));
}

// Duplicar chips del carrusel para loop infinito
document.querySelectorAll('.stack-track').forEach((track) => {
  const clone = track.innerHTML;
  track.innerHTML += clone;
});
