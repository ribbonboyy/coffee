document.querySelector("#stats").addEventListener("mouseenter", () => {
    createConfetti();
});

function createConfetti() {
    const statsSection = document.querySelector("#stats");
    const container = document.createElement("div");
    container.classList.add("confetti-container");
    statsSection.appendChild(container);
    
    for (let i = 0; i < 30; i++) { // 🎊 More confetti
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // 🌈 Random Colors
        const colors = ["#ff4757", "#1e90ff", "#2ed573", "#fffa65", "#a29bfe"];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // 🎭 Random Start Position (Falls from the Top)
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = `-10px`;

        container.appendChild(confetti);

        // ⏳ Remove confetti after animation
        setTimeout(() => confetti.remove(), 2500);
    }

    // ⏳ Remove container after all confetti is gone
    setTimeout(() => container.remove(), 2600);
}
