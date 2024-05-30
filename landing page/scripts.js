document.addEventListener("DOMContentLoaded", () => {
    const latestSection = document.querySelector("#latest .anime-grid");

    // Example anime data
    const animeList = [
        { title: "Attack on Titan", image: "aot.jpg" },
        { title: "My Hero Academia", image: "my-hero-academia.jpg" },
        { title: "Demon Slayer", image: "demon.jpg" },
        { title: "Naruto", image: "naruto.jpg" },
        { title: "One Piece", image: "onepiece.jpg" },
    ];

    animeList.forEach(anime => {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");
        
        const animeImage = document.createElement("img");
        animeImage.src = anime.image;
        animeImage.alt = anime.title;
        
        const animeTitle = document.createElement("h3");
        animeTitle.textContent = anime.title;
        
        animeCard.appendChild(animeImage);
        animeCard.appendChild(animeTitle);
        
        latestSection.appendChild(animeCard);
    });
});
