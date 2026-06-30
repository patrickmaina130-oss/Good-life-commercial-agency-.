"use strict";

/*==================================================
SECTION 2: HEADER & NAVIGATION LOGIC
==================================================*/

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

// 1. Sticky Header Shadow on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
    }
});

// 2. Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    
    // Toggle icon visual
    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// 3. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
            // Close menu after clicking on mobile
            navbar.classList.remove("active");
            menuBtn.textContent = "☰";
        }
    });
});
/*==================================================
SECTION 3: HERO SECTION - PART C (INTERACTIVE)
==================================================*/

const heroImage = document.querySelector(".hero-image img");

// 1. Hero Image Floating Effect on Mouse Move
window.addEventListener("mousemove", (e) => {
    // Only apply on desktop for performance
    if (window.innerWidth > 992) {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        heroImage.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    }
});

// 2. Reset Position when Mouse Leaves
window.addEventListener("mouseleave", () => {
    heroImage.style.transform = "translate(0,0) scale(1)";
});

// 3. Stats Counter Animation (Trigger when user scrolls to stats)
const statNumbers = document.querySelectorAll(".hero-stats h3");
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.innerText);
            let count = 0;
            const speed = target / 50; // Adjust speed here

            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.floor(count) + "+";
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
            observer.unobserve(counter);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => observer.observe(stat));
