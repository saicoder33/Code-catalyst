document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-links a");
  const mobileBreakpoint = window.matchMedia("(max-width: 768px)");

  if (!hamburger || !navLinks) {
    return;
  }

  const closeMenu = () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.setAttribute("aria-controls", "nav-links");
  hamburger.setAttribute("aria-expanded", "false");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  mobileBreakpoint.addEventListener("change", (event) => {
    if (!event.matches) {
      closeMenu();
    }
  });
});
