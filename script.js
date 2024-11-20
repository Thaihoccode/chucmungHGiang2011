// Function to generate confetti effect
function startConfetti() {
    const confettiCount = 150;
    const colors = ['#f39c12', '#e67e22', '#f1c40f', '#e74c3c'];

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.top = Math.random() * 100 + '%';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.width = Math.random() * 10 + 'px';
        confettiPiece.style.height = Math.random() * 10 + 'px';
        confettiPiece.style.animation = `fall ${Math.random() * 3 + 2}s infinite ease-in`;

        document.body.appendChild(confettiPiece);
    }
}

// Add event listener to the button
document.getElementById('confettiButton').addEventListener('click', startConfetti);
