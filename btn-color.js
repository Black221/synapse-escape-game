const overlayColor = document.querySelector('#overlay-color');

let isColorAnimation = false;

const colors = [
    '#0f0',
    '#00f',
    '#ff0',
    '#f0f',
    '#0ff',
    'rgba(0, 0, 0, 0.5)'
];
let colorIndex = 0;

let intervalId;

function handleColorAnimation() {
    if (isColorAnimation) {
        return;
    }
    isColorAnimation = true;
    function animateColor() {
        overlayColor.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        if (colorIndex === 0) {
            clearInterval(intervalId);
            isColorAnimation = false;
        }
    }
    intervalId = setInterval(animateColor, 1000);
}
const colorCode = colors.length - 1
export {
    handleColorAnimation,
    colorCode
}