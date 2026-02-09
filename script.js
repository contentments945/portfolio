/* ================================
   Mobile Menu Toggle
================================ */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ================================
   Contact Form Handling
================================ */
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been sent successfully.";
        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = "";
        }, 4000);
    });
}

/* ================================
   Active Navbar Link on Scroll
================================ */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

/* ================================
   Scroll Reveal Animation
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

/* ================================
   Scroll Event Listener
================================ */
window.addEventListener("scroll", () => {
    updateActiveNav();
    revealOnScroll();
});

// Trigger once on page load
updateActiveNav();
revealOnScroll();
/* ================================
   Dark / Light Mode Toggle
================================ */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
