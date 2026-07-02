
"use strict";

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
MAIN SCRIPT
==================================================*/

/*==================================================
1. GLOBAL VARIABLES
==================================================*/

let currentCategory = "tours";
let currentSlide = 0;
let autoHero = null;

/*==================================================
2. DOM ELEMENTS
==================================================*/

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.getElementById("header");

const heroSlides = document.querySelectorAll(".hero-slide");
const sliderDots = document.querySelectorAll(".slider-dot");

const marketplaceGrid = document.getElementById("marketplaceGrid");

const categoryButtons = document.querySelectorAll(".category-btn");

const backToTop = document.getElementById("backToTop");

/*==================================================
3. MOBILE MENU
==================================================*/

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}

/*==================================================
4. STICKY HEADER
==================================================*/

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add(
            "shadow-xl",
            "backdrop-blur-md"
        );

    } else {

        header.classList.remove(
            "shadow-xl",
            "backdrop-blur-md"
        );

    }

});

/*==================================================
5. HERO SLIDER
==================================================*/

function showSlide(index) {

    heroSlides.forEach((slide, i) => {

        if (i === index) {

            slide.classList.remove("hidden");

        } else {

            slide.classList.add("hidden");

        }

    });

    sliderDots.forEach((dot, i) => {

        if (i === index) {

            dot.classList.add("bg-gold");

            dot.classList.remove("bg-white/50");

        } else {

            dot.classList.remove("bg-gold");

            dot.classList.add("bg-white/50");

        }

    });

}

function startHeroSlider() {

    if (!heroSlides.length) return;

    showSlide(0);

    autoHero = setInterval(() => {

        currentSlide++;

        if (currentSlide >= heroSlides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 5000);

}

/*==================================================
6. HERO DOT CONTROLS
==================================================*/

sliderDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(index);

    });

});

/*==================================================
7. CREATE MARKETPLACE CARD
==================================================*/

function createMarketplaceCard(item) {

    return `

        <article class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <div class="relative">

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                    class="w-full h-64 object-cover">

                <span class="absolute top-4 left-4 bg-gold text-primary px-4 py-2 rounded-full text-sm font-bold">

                    ${item.badge}

                </span>

            </div>

            <div class="p-6">

                <h3 class="text-2xl font-bold text-primary">

                    ${item.title}

                </h3>

                <p class="text-slate-500 mt-2">

                    📍 ${item.location}

                </p>

                <div class="flex justify-between items-center mt-4">

                    <span class="text-yellow-500 font-bold">

                        ⭐ ${item.rating}

                    </span>

                    <span class="text-slate-500">

                        ${item.category}

                    </span>

                </div>

                <div class="mt-5">

                    <p class="text-sm text-slate-500">

                        Starting From

                    </p>

                    <h2 class="text-3xl font-extrabold text-gold">

                        USD ${item.priceUSD}

                    </h2>

                    <p class="text-slate-700">

                        KES ${item.priceKES}

                    </p>

                </div>

                <p class="mt-4 text-slate-600">

                    ${item.description}

                </p>

                <div class="grid grid-cols-2 gap-3 mt-6">

                    <button
                        class="quick-view bg-white border-2 border-gold text-gold rounded-xl py-3 font-semibold">

                        Quick View

                    </button>

                    <button
                        class="book-now bg-gold text-primary rounded-xl py-3 font-bold hover:scale-105 transition">

                        Book Now

                    </button>

                </div>

            </div>

        </article>

    `;

}

/*==================================================
8. LOAD MARKETPLACE
==================================================*/

function renderMarketplace(category = "tours") {

    if (!marketplaceGrid) return;

    marketplaceGrid.innerHTML = "";

    if (!marketplaceData[category]) return;

    marketplaceData[category].forEach(item => {

        marketplaceGrid.innerHTML += createMarketplaceCard(item);

    });

}

/*==================================================
9. CATEGORY BUTTONS
==================================================*/

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove(
                "bg-gold",
                "text-primary"
            );

            btn.classList.add(
                "bg-slate-100"
            );

        });

        button.classList.remove("bg-slate-100");

        button.classList.add(
            "bg-gold",
            "text-primary"
        );

        currentCategory = button.dataset.category;

        if (currentCategory === "all") {

            renderMarketplace("tours");

        } else {

            renderMarketplace(currentCategory);

        }

    });

});

/*==================================================
10. SEARCH FUNCTION
==================================================*/

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const search = this.value.toLowerCase();

        const cards = document.querySelectorAll("#marketplaceGrid article");

        cards.forEach(card => {

            if (card.innerText.toLowerCase().includes(search)) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

}

/*==================================================
11. BOOK NOW BUTTONS
==================================================*/

document.addEventListener("click", (event) => {

    if (event.target.classList.contains("book-now")) {

        alert("Online booking will be available soon. Please contact Good Life Commercial Agencies.");

    }

});

/*==================================================
12. IMAGE FALLBACK
==================================================*/

document.addEventListener("error", function (event) {

    if (event.target.tagName === "IMG") {

        event.target.src =
            "https://placehold.co/800x600?text=Image+Unavailable";

    }

}, true);

/*==================================================
13. BACK TO TOP
==================================================*/

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.remove("hidden");

        } else {

            backToTop.classList.add("hidden");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================================
14. SCROLL REVEAL
==================================================*/

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.remove("opacity-0");
                entry.target.classList.remove("translate-y-8");

                observer.unobserve(entry.target);

            }

        });

    });

    revealItems.forEach(item => observer.observe(item));

}

/*==================================================
15. INITIALIZE WEBSITE
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    startHeroSlider();

    renderMarketplace("tours");

});

/*==================================================
END OF SCRIPT
==================================================*/
