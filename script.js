let slides = document.querySelector('.slides');
let images = document.querySelectorAll('.slides img');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');

let img = 0;
let interval;

function showImg() {
    slides.style.transform = `translateX(-${img * 100}%)`;
}

function startImg() {
    interval = setInterval(() => {
        img = (img + 1) % images.length;
        showImg();
    }, 3500);
}

function stopImg() {
    clearInterval(interval);
}
startImg();


leftBtn.addEventListener('click', () => {
    img = (img - 1 + images.length) % images.length;
    showImg();
});

rightBtn.addEventListener('click', () => {
    img = (img + 1) % images.length;
    showImg();
});

document.querySelector('.gallery').addEventListener('mouseover', stopImg);
document.querySelector('.gallery').addEventListener('mouseout', startImg);

