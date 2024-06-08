function showSuggestions(city) {
    const suggestionsContainer = document.getElementById("suggestions");
    
    const suggestions = {
        "New York": [
            {
                title: "Central Park Picnic",
                img: "NewYork/Picnic.jpeg",
                description: "Enjoy a lovely picnic at Central Park. Bring a blanket, some snacks, and relax in the greenery."
            },
            {
                title: "Broadway Show",
                img: "NewYork/Show.jpg",
                description: "Experience the magic of Broadway with a fantastic show. Check for current running shows and book tickets in advance."
            },
            {
                title: "Dinner at a Rooftop Restaurant",
                img: "NewYork/Rooftop.jpg",
                description: "Dine with a view! Visit one of New York's famous rooftop restaurants for a romantic dinner."
            }
        ],
        "Paris": [
            {
                title: "Seine River Cruise",
                img: "Paris/Cruise.jpg",
                description: "Take a romantic cruise along the Seine River and enjoy the beautiful sights of Paris at night."
            },
            {
                title: "Eiffel Tower Visit",
                img: "Paris/Eiffel.jpg",
                description: "No visit to Paris is complete without a trip to the Eiffel Tower. Book tickets in advance to avoid long lines."
            },
            {
                title: "Wine Tasting Tour",
                img: "Paris/Wine.jpg",
                description: "Explore the best wines of France with a guided wine tasting tour. Perfect for wine enthusiasts."
            }
        ],
        "Tokyo": [
            {
                title: "Cherry Blossom Viewing",
                img: "Tokyo/Sakura.jpg",
                description: "Enjoy the beautiful cherry blossoms in Tokyo during the spring season. A perfect spot for a romantic walk."
            },
            {
                title: "Visit Tokyo Tower",
                img: "Tokyo/TokyoTower.jpg",
                description: "Get a panoramic view of Tokyo from the iconic Tokyo Tower. Visit during the evening for a stunning view of the city lights."
            },
            {
                title: "Sushi Making Class",
                img: "Tokyo/Sushi.jpg",
                description: "Learn how to make sushi from professional chefs. A fun and interactive activity for couples."
            }
        ],
        "London": [
            {
                title: "London Eye Ride",
                img: "London/LondonEye.jpg",
                description: "Take a ride on the London Eye and get a breathtaking view of the city from above."
            },
            {
                title: "Afternoon Tea",
                img: "London/AfternoonTea.jpg",
                description: "Experience the British tradition of afternoon tea with a variety of teas, sandwiches, and pastries."
            },
            {
                title: "Thames River Cruise",
                img: "London/Cruise.jpg",
                description: "Enjoy a leisurely cruise along the Thames River and take in the sights of London from the water."
            }
        ]
    };

    if (city && suggestions[city]) {
        suggestionsContainer.innerHTML = `
            <h2>Suggestions for ${city}</h2>
            <div class="suggestions-grid">
                ${suggestions[city].map(suggestion => `
                    <div class="suggestion-box" onclick="showModal('${suggestion.title}', '${suggestion.description}')">
                        <img src="${suggestion.img}" alt="${suggestion.title}">
                        <p>${suggestion.title}</p>
                    </div>
                `).join('')}
            </div>
        `;
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function filterCities() {
    const input = document.getElementById("city-search").value.toLowerCase();
    const cities = document.querySelectorAll(".city-list div");
    
    cities.forEach(city => {
        const cityName = city.textContent.toLowerCase();
        if (cityName.includes(input)) {
            city.style.display = "block";
        } else {
            city.style.display = "none";
        }
    });
}

function showModal(title, description) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDetails = document.getElementById("modal-details");

    modalTitle.textContent = title;
    modalDetails.innerHTML = `<li>${description}</li>`;
    
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
