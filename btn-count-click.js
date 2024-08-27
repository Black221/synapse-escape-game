
const adviceModal = document.getElementById('advice');
document.getElementById("advice-2").style.display = 'none';
document.getElementById("advice-3").style.display = 'none';

let step = 1;
let canClick = false;

const movePositions = [
    { x: -100, y: -250 }, 
    { x: 100, y: -50 }, 
    { x: -180, y: 240 }, 
    { x: 0, y: 0 },
    { x: -160, y: 0 }
];

let currentPosition = 0;
// rand number between 4 and 8

function handleCountClick () {
    document.getElementById('advice').style.display = 'block';
    console.log('handleCountClick');
    document.getElementById('btn-fool').addEventListener('mouseover', animateButton);
}

function animateButton() {
    if (currentPosition >= movePositions.length ) {
        document.getElementById('btn-fool').removeEventListener('mouseover', animateButton);
        document.getElementById('btn-fool').addEventListener('click', lastAnime);
        document.getElementById('btn-fool').style.transform = `rotate(180deg)`;
        return;
    }
    document.getElementById('btn-fool').style.transform = `translate(${movePositions[currentPosition].x}px, ${movePositions[currentPosition].y}px)`;
    currentPosition ++;
}

function lastAnime() {
    step++;
    if (step === 2) {
        document.getElementById("advice-1").style.display = 'none';
        document.getElementById("advice-2").style.display = 'block';
        document.getElementById("btn-fool").addEventListener('mouseover', justOneMoreTime);
    } else if (step === 3) {
        document.getElementById("advice-2").style.display = 'none';
        document.getElementById("advice-3").style.display = 'block';
        document.getElementById("btn-fool").style.display = 'none';
    }
}

function justOneMoreTime() {
    document.getElementById('btn-fool').style.transform = `rotate(360deg)`;
    document.getElementById('btn-fool').removeEventListener('click', justOneMoreTime);
}

const hoverButtonCode = 6
export {
    handleCountClick,
    hoverButtonCode
}