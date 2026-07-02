"use strict";

/* =========================
DATA
========================= */

const marketplaceData = [
    {
        title: "Maasai Mara Safari",
        location: "Narok",
        category: "tours",
        price: "299 - 499",
        image: "assets/images/tours/maasai-mara.jpg"
    },
    {
        title: "Diani Beach Resort",
        location: "Diani",
        category: "hotels",
        price: "120 - 300",
        image: "assets/images/hotels/diani.jpg"
    },
    {
        title: "Toyota Land Cruiser",
        location: "Nairobi",
        category: "vehicles",
        price: "80/day",
        image: "assets/images/vehicles/landcruiser.jpg"
    },
    {
        title: "Luxury Apartment",
        location: "Westlands",
        category: "realestate",
        price: "150,000/month",
        image: "assets/images/realestate/apartment.jpg"
    }
];

/* =========================
ELEMENTS
========================= */

const grid = document.getElementById("marketplaceGrid");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const categoryBtns = document.querySelectorAll(".category-btn");

let activeCategory = "all";

/* =========================
RENDER
========================= */

function render(data) {
    grid.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");

        card.className =
            "bg-white rounded-3xl shadow-lg overflow-hidden hover-card";

        card.innerHTML = `
            <img src="${item.image}"
                 class="h-48 w-full object-cover"
                 onerror="this.src='assets/images/fallback.jpg'">

            <div class="p-5">
                <h3 class="font-bold text-lg text-primary">${item.title}</h3>

                <p class="text-sm text-slate-500">${item.location}</p>

                <div class="mt-3 flex justify-between">
                    <span class="text-gold font-bold">$${item.price}</span>
                    <span class="text-xs bg-slate-100 px-3 py-1 rounded-full">
                        ${item.category}
                    </span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* =========================
FILTER SYSTEM
========================= */

function filterData() {
    let filtered = marketplaceData;

    if (activeCategory !== "all") {
        filtered = filtered.filter(item => item.category === activeCategory);
    }

    const search = searchInput.value.toLowerCase();
    const location = locationFilter.value.toLowerCase();

    if (search) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(search)
        );
    }

    if (location) {
        filtered = filtered.filter(item =>
            item.location.toLowerCase().includes(location)
        );
    }

    render(filtered);
}

/* =========================
EVENTS
========================= */

searchInput.addEventListener("input", filterData);
locationFilter.addEventListener("change", filterData);

categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryBtns.forEach(b => b.classList.remove("bg-gold", "text-primary"));

        btn.classList.add("bg-gold", "text-primary");

        activeCategory = btn.dataset.category;

        filterData();
    });
});

/* =========================
INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    render(marketplaceData);
});
