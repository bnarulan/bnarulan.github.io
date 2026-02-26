const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.4;

function startExperience() {
    const welcome = document.getElementById('welcome-overlay');
    welcome.classList.add('fade-out');
    bgMusic.play().catch(e => console.log("Ошибка воспроизведения:", e));
    setBackgroundDate();
}

function openImage() {
    const posterSrc = document.getElementById('posterImg').src;
    document.getElementById('fullImage').src = posterSrc;
    document.getElementById('overlay').style.display = 'flex';
}

function closeImage() {
    document.getElementById('overlay').style.display = 'none';
}

const btnNo = document.getElementById('runawayBtn');
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = 'fixed';
    btnNo.style.left = x + 'px';
    btnNo.style.top = y + 'px';
    btnNo.style.zIndex = '999';
});

btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Кнопка сломалась, придется нажать на соседнюю! 😉');
});
function setBackgroundDate() {
    const bgDateElement = document.getElementById('bg-date');
    const now = new Date();
    
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2); 
    
    bgDateElement.innerText = `${day}.${month}.${year}`;
}

setBackgroundDate();