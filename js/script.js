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

// Move "No" button function
function moveButton(button) {
    const padding = 20;

    // IMPORTANT: absolute positioning inside body
    button.style.position = "absolute";

    // Get visible area (not full document)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight + window.scrollY;

    const btnWidth = button.offsetWidth;
    const btnHeight = button.offsetHeight;

    const maxX = viewportWidth - btnWidth - padding;
    const maxY = viewportHeight - btnHeight - padding;

    const x = Math.random() * Math.max(padding, maxX);
    const y = Math.random() * Math.max(padding, maxY);

    button.style.left = x + "px";
    button.style.top = y + "px";
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    triggerConfetti();
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    triggerConfetti();
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.whatsapp-btn').style.display = 'inline-block';
    triggerConfetti();
    
    // Additional confetti for the final celebration
    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
