
const spotlight = document.querySelector('#spotlight');
const overlay = document.querySelector('#overlay');

let scrollAmount = 0;

let yPos = 0;
let xPos = 0;

window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(e) {
    clientY = e.clientY;
    clientX = e.clientX;

    setTimeout(() => {
        yPos = clientY - overlay.offsetHeight / 2;
        xPos = clientX - overlay.offsetWidth / 2;
    
        scrollAmount = overlay.scrollTop + yPos;
    
        overlay.style.top = `${scrollAmount}px`;
        overlay.style.left = `${xPos}px`;
    }, 100);
}