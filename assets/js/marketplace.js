"use strict";

/*==================================================
GOOD LIFE COMMERCIAL AGENCIES
MARKETPLACE DATABASE
==================================================*/

const marketplaceData = {

    tours: [

        {
            title: "Maasai Mara Safari",
            location: "Narok, Kenya",
            category: "tours",
            priceUSD: "299 - 499",
            priceKES: "38,500 - 64,500",
            rating: 4.9,
            badge: "Safari",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
            description: "Experience the Big Five in Kenya's most famous wildlife reserve."
        },

        {
            title: "Amboseli National Park",
            location: "Kajiado",
            category: "tours",
            priceUSD: "250 - 420",
            priceKES: "32,000 - 54,000",
            rating: 4.8,
            badge: "Wildlife",
            image: "https://images.unsplash.com/photo-1508675801627-066ac4346a55?auto=format&fit=crop&w=900&q=80",
            description: "Amazing elephant herds with Mount Kilimanjaro views."
        },

        {
            title: "Diani Beach Holiday",
            location: "Kwale",
            category: "tours",
            priceUSD: "350 - 650",
            priceKES: "45,000 - 84,000",
            rating: 4.9,
            badge: "Beach",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
            description: "White sandy beaches and crystal-clear waters."
        },

        {
            title: "Mount Kenya Trek",
            location: "Nyeri",
            category: "tours",
            priceUSD: "420",
            priceKES: "54,000",
            rating: 4.8,
            badge: "Adventure",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
            description: "A thrilling hiking experience to Africa's second-highest peak."
        }

    ],
    hotels: [

        {
            title: "Luxury Hotel Nairobi",
            location: "Nairobi",
            category: "hotels",
            priceUSD: "240",
            priceKES: "31,000",
            rating: 4.9,
            badge: "5 Star",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
            description: "Luxury accommodation in the heart of Nairobi."
        },

        {
            title: "Diani Beach Resort",
            location: "Mombasa",
            category: "hotels",
            priceUSD: "180",
            priceKES: "23,000",
            rating: 4.8,
            badge: "Beach Resort",
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=900&q=80",
            description: "Oceanfront resort with breathtaking Indian Ocean views."
        },

        {
            title: "Safari Lodge Naivasha",
            location: "Naivasha",
            category: "hotels",
            priceUSD: "220",
            priceKES: "28,000",
            rating: 4.8,
            badge: "Safari Lodge",
            image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
            description: "Comfortable lodge overlooking Lake Naivasha."
        }

    ],

    vehicles: [

        {
            title: "Toyota Prado",
            location: "Self Drive",
            category: "vehicles",
            priceUSD: "95",
            priceKES: "12,000",
            rating: 4.9,
            badge: "SUV",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
            description: "Perfect for safaris and family road trips."
        },

        {
            title: "Mercedes S-Class",
            location: "Chauffeur Service",
            category: "vehicles",
            priceUSD: "180",
            priceKES: "23,000",
            rating: 5.0,
            badge: "Executive",
            image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
            description: "Executive luxury transport with professional chauffeur."
        },

        {
            title: "Toyota Land Cruiser",
            location: "Safari Hire",
            category: "vehicles",
            priceUSD: "220",
            priceKES: "28,000",
            rating: 5.0,
            badge: "4x4",
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
            description: "The ultimate safari vehicle for every terrain."
        }

    ],

    realestate: [

        {
            title: "Luxury Apartment",
            location: "Westlands, Nairobi",
            category: "realestate",
            priceUSD: "135,000",
            priceKES: "17.5M",
            rating: 4.9,
            badge: "Apartment",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
            description: "Modern apartment with premium amenities."
        },

        {
            title: "Modern Villa",
            location: "Karen, Nairobi",
            category: "realestate",
            priceUSD: "320,000",
            priceKES: "41M",
            rating: 5.0,
            badge: "Villa",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
            description: "Elegant villa in one of Nairobi's most prestigious suburbs."
        }

    ],

      corporate: [

        {
            title: "Business Travel Package",
            location: "Kenya",
            category: "corporate",
            priceUSD: "450+",
            priceKES: "58,000+",
            rating: 5.0,
            badge: "Executive",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
            description: "Professional corporate travel management for businesses."
        },

        {
            title: "Conference & Events",
            location: "Nairobi",
            category: "corporate",
            priceUSD: "550",
            priceKES: "71,000",
            rating: 5.0,
            badge: "Meetings",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
            description: "Conference planning, accommodation and transport solutions."
        }

    ],

    community: [

        {
            title: "Tree Planting Program",
            location: "Kenya",
            category: "community",
            priceUSD: "FREE",
            priceKES: "Donation",
            rating: 5.0,
            badge: "Environment",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
            description: "Join our environmental conservation initiatives."
        },

        {
            title: "Food Donation Drive",
            location: "Nairobi",
            category: "community",
            priceUSD: "FREE",
            priceKES: "Donation",
            rating: 5.0,
            badge: "Charity",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
            description: "Support vulnerable families through our community outreach programs."
        }

    ]

};

  
