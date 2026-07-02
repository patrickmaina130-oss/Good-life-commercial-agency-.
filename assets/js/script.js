"use strict";

/* =========================
MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

/* =========================
HERO SLIDER AUTO PLAY
========================= */

const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.add("hidden");
        slide.style.opacity = 0;

        if (i === index) {
            slide.classList.remove("hidden");
            slide.style.opacity = 1;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    showSlide(0);
    setInterval(nextSlide, 5000);
}

/* =========================
COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 100;

    function update() {
        count += speed;
        if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    }

    update();
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => observer.observe(counter));

/* =========================
ANIMATION ON SCROLL
========================= */

const elements = document.querySelectorAll(".hover-card");

const scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => scrollObserver.observe(el));

/* =========================
BACK TO TOP
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
