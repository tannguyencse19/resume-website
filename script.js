const typeWriter = document.getElementById("typeWriter");
const typeWriterArr = ["Frontend Developer", "Blogger", "Programmer"]
let text = 0;

setInterval(() => {
    text = (text < typeWriterArr.length - 1) ? ++text : 0;
    typeWriter.innerHTML = typeWriterArr[text];
}, 6000);

$('#popup-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'inline',
});

// initialize sweet scroll
document.addEventListener('DOMContentLoaded', () => {
    // code start here
    // SweetScroll.create({
    //     // option declare here
    //     horizontal: true,
    //     trigger: 'a[href^="#"]',
    // }, "#logo-scroll");
}, false);

const slider = document.querySelector('.logo-container');
let isDown = false;
let startX;
let scrollLeft;

const buttonLeft = document.getElementById('slideLeft');
const buttonRight = document.getElementById('slideRight');

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('grab-active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('grab-active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('grab-active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

buttonLeft.onmousedown = () => {
    slider.classList.add('btn-active');
    slider.scrollLeft -= 200; // can tinh toan lai
    scrollLeft = slider.scrollLeft;
};

buttonRight.onmousedown = () => {
    slider.classList.add('btn-active');
    slider.scrollLeft += 200;
    scrollLeft = slider.scrollLeft;
};

buttonLeft.onmouseup = () => slider.classList.remove('btn-active');
buttonRight.onmouseup = () => slider.classList.remove('btn-active');
