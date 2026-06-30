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
