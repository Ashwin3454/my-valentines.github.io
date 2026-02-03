
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

// FIXED: No button moves correctly AND Yes button works
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
    button.style.zIndex = "999"; // keep above, but not block others
}

// YES button handler (explicit, no side effects)
document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.getElementById("question");
    const success = document.getElementById("success");

    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            question.style.display = "none";
            success.style.display = "block";
            if (noBtn) noBtn.remove();
            triggerConfetti();
        });
    }
});

// Confetti
function triggerConfetti() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}
