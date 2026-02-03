
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

// EXACT working logic copied from reference site
function moveButton(button) {
    const containerHeight = window.innerHeight;
    const containerWidth = window.innerWidth;

    const btnHeight = button.offsetHeight;
    const btnWidth = button.offsetWidth;

    const newTop = Math.random() * (containerHeight - btnHeight);
    const newLeft = Math.random() * (containerWidth - btnWidth);

    button.style.position = "fixed";
    button.style.top = newTop + "px";
    button.style.left = newLeft + "px";
}

// Confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
