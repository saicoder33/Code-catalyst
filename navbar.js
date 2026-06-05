const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// Toggle menu when hamburger clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when any link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 🔽 Extra safety: always reset menu on page load
window.addEventListener("DOMContentLoaded", () => {
  navLinks.classList.remove("active");
});
