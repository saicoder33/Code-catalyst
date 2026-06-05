// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) {
        return;
    }

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

        // Background element animations
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

if (p1 && p2 && p3) {
    const particles = [
        { el: p1, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: 0.2, vy: 0.15 },
        { el: p2, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: -0.15, vy: 0.2 },
        { el: p3, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: 0.1, vy: -0.1 }
    ];

    function animateParticles() {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -200) p.x = window.innerWidth + 200;
            if (p.x > window.innerWidth + 200) p.x = -200;
            if (p.y < -200) p.y = window.innerHeight + 200;
            if (p.y > window.innerHeight + 200) p.y = -200;

            p.el.style.left = `${p.x}px`;
            p.el.style.top = `${p.y}px`;
        });
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// Dynamic Stars and Shooting Lines
const container = document.getElementById('dynamic-bg-elements');
if (container) {
    const starCount = 50;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        const s = {
            el: star,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.1
        };

        star.style.opacity = s.opacity;
        container.appendChild(star);
        stars.push(s);
    }

    function createShootingLine() {
        const line = document.createElement('div');
        line.className = 'shooting-line';
        const length = Math.random() * 100 + 100;
        line.style.width = `${length}px`;

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * (window.innerHeight * 0.7);
        const angle = 20 + Math.random() * 20; // 20-40 degrees

        line.style.left = `${startX}px`;
        line.style.top = `${startY}px`;
        line.style.transform = `rotate(${angle}deg) translateX(0)`;

        container.appendChild(line);

        const duration = 1000 + Math.random() * 1000;
        const anim = line.animate([
            { transform: `rotate(${angle}deg) translateX(0)`, opacity: 0 },
            { transform: `rotate(${angle}deg) translateX(${length * 2}px)`, opacity: 0.8, offset: 0.5 },
            { transform: `rotate(${angle}deg) translateX(${length * 4}px)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'ease-in'
        });

        anim.onfinish = () => line.remove();
    }

    // Random shooting lines
    setInterval(() => {
        if (Math.random() > 0.7) createShootingLine();
    }, 2000);

    function updateStars() {
        stars.forEach(s => {
            s.x += s.vx;
            s.y += s.vy;

            // Wrap around
            if (s.x < 0) s.x = window.innerWidth;
            if (s.x > window.innerWidth) s.x = 0;
            if (s.y < 0) s.y = window.innerHeight;
            if (s.y > window.innerHeight) s.y = 0;

            s.el.style.transform = `translate(${s.x}px, ${s.y}px)`;
        });
        requestAnimationFrame(updateStars);
    }

    updateStars();
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// Toggle menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu when any link is clicked
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Extra: Close menu on page load (important for multi-page sites)
window.addEventListener("load", () => {
  navLinks.classList.remove("active");
});