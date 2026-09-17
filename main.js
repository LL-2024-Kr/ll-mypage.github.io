const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function openConferenceGallery() {
  document.getElementById("conference-gallery").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeConferenceGallery() {
  document.getElementById("conference-gallery").classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeConferenceGallery();
  }
});
