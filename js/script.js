
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

// Move "No" button strictly inside container
function moveButton(button) {
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const padding = 10;

    const maxX = containerRect.width - buttonRect.width - padding;
    const maxY = containerRect.height - buttonRect.height - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

// Confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
