document.addEventListener("DOMContentLoaded", function() {
    const backgroundMusic = document.getElementById("background-music");
    const disc = document.getElementById("disc");

    const playMusic = () => {
        backgroundMusic.play().then(() => {
            disc.classList.add("spin");
        }).catch((error) => {
            console.log("Error playing music:", error);
        });
    };
    document.addEventListener('click', function() {
        playMusic();
        // start 2 second
        setTimeout(playMusic, 2000);
    }, { once: true });
});
