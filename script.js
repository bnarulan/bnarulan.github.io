(function () {
    'use strict';

    const noBtn = document.getElementById('noBtn');
    const mainCard = document.getElementById('mainCard');
    const successCard = document.getElementById('successCard');
    const confettiContainer = document.getElementById('confetti-container');

    const PADDING = 80;

    function getRandomPosition() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const btnW = noBtn.offsetWidth;
        const btnH = noBtn.offsetHeight;
        const maxX = w - btnW - PADDING * 2;
        const maxY = h - btnH - PADDING * 2;
        const x = PADDING + Math.max(0, Math.random() * maxX);
        const y = PADDING + Math.max(0, Math.random() * maxY);
        return { x, y };
    }

    function moveButton() {
        const { x, y } = getRandomPosition();
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
        noBtn.style.transform = 'none';
        noBtn.style.transition = 'left 0.15s ease-out, top 0.15s ease-out';
    }

    function acceptLove() {
        mainCard.style.opacity = '0';
        mainCard.style.transform = 'scale(0.95)';
        mainCard.style.pointerEvents = 'none';

        setTimeout(function () {
            mainCard.style.display = 'none';
            successCard.style.display = 'block';
            successCard.style.animation = 'cardIn 0.5s ease forwards';
            createConfetti();
        }, 200);
    }

    function createConfetti() {
        const colors = ['#ff4d6d', '#ffb3c1', '#ffd166', '#e8b4bc', '#c71585', '#ff69b4'];
        const shapes = ['square', 'circle', 'rect'];
        const count = 80;

        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            el.className = 'confetti confetti--' + shapes[i % shapes.length];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.top = '-20px';
            el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            el.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
            el.style.animationDelay = (Math.random() * 0.5) + 's';
            confettiContainer.appendChild(el);

            setTimeout(function () {
                if (el.parentNode) el.remove();
            }, 5500);
        }
    }

    if (noBtn) {
        noBtn.addEventListener('mouseenter', moveButton);
        noBtn.addEventListener('touchstart', function (e) {
            e.preventDefault();
            moveButton();
        }, { passive: false });
    }

    window.acceptLove = acceptLove;
})();
