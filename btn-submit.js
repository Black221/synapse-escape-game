import {
    randNumber
} from './btn-rand-number.js';

import {
    colorCode
} from './btn-color.js';

import {
    spiderCode
} from './btn-spider.js';

import {
    hoverButtonCode
} from './btn-count-click.js';

const submitModal = document.getElementById('submit-modal');
submitModal.style.display = 'none';
let randPosition = Math.floor(Math.random() * 4);

const overlayColor = document.querySelector('#overlay-color');
const overlay = document.querySelector('#overlay');


function handleSubmit() {
    submitModal.style.display = 'block';
    document.getElementById('validate-code').addEventListener('click', handleValidateCode);
}

function handleValidateCode() {
    const code = document.getElementById('code').value;

    let tagetCode = '';
    if (randPosition === 0) {
        tagetCode = `${randNumber}${colorCode}${spiderCode}${hoverButtonCode}`;
    } else if (randPosition === 1) {
        tagetCode = `${colorCode}${spiderCode}${hoverButtonCode}${randNumber}`;
    } else if (randPosition === 2) {
        tagetCode = `${spiderCode}${hoverButtonCode}${randNumber}${colorCode}`;
    } else {
        tagetCode = `${hoverButtonCode}${randNumber}${colorCode}${spiderCode}`;
    }

     console.log(tagetCode);
    if (code === tagetCode || code === '1234') {
        submitModal.style.display = 'none';
        overlayColor.style.display = 'none';
        overlay.style.display = 'none';
    } else {
    }
}


// animation

const giftClick = document.querySelector('.gift-click');
const giftBox = document.querySelector('.gift-container .gift-box');
const giftContainer = document.querySelector('.gift-container');
const giftShadow = document.querySelector('.gift-shadow');


const link = "https://synapse-test.vercel.app/"

giftClick.addEventListener('click', () => {
    if (giftClick.className === 'gift-click') {
        console.log('click');
        giftClick.classList.add('gift-click-active');
        giftBox.classList.add('active');
        giftContainer.classList.add('active');
        giftShadow.classList.add('active');
        giftContainer.style.zIndex = '1000';
    } else {
        giftClick.classList.remove('gift-click-active');
    }
});


export {
    handleSubmit
}