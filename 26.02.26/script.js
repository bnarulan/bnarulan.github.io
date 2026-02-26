window.startExperience = function() {
    const welcome = document.getElementById('welcome-overlay');
    const bgMusic = document.getElementById('bgMusic');
    
    if (welcome) welcome.classList.add('fade-out');
    if (bgMusic) {
        bgMusic.volume = 0.4;
        bgMusic.play().catch(e => console.log(e));
    }
    setBackgroundDate();
};

window.setBackgroundDate = function() {
    const el = document.getElementById('bg-date');
    if (el) {
        const now = new Date();
        el.innerText = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}`;
    }
};

window.openImage = function() {
    const src = document.getElementById('posterImg').src;
    document.getElementById('fullImage').src = src;
    document.getElementById('overlay').style.display = 'flex';
};

window.closeImage = function() {
    document.getElementById('overlay').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('runawayBtn');
    if (btn) {
        const move = () => {
            btn.style.position = 'fixed';
            btn.style.left = Math.random() * (window.innerWidth - btn.offsetWidth) + 'px';
            btn.style.top = Math.random() * (window.innerHeight - btn.offsetHeight) + 'px';
        };
        btn.addEventListener('mouseover', move);
        btn.addEventListener('touchstart', e => { e.preventDefault(); move(); });
    }
});