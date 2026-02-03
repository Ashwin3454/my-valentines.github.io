
// Create hearts effect
function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);

// Move "No" button INSIDE viewport only
function moveButton(button) {
    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    const padding = 10;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const minX = padding;
    const minY = padding;

    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    button.style.position = "fixed";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
