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

const spotlight = document.querySelector('#spotlight');

function handleSubmit() {
    submitModal.style.display = 'block';
    document.getElementById('validate-code').addEventListener('click', handleValidateCode);
}

let  canOpenSuprise = false;

function handleValidateCode() {
    const code = document.getElementById('code').value;

    let tagetCode = `${randNumber}${colorCode}${spiderCode}${hoverButtonCode}`;
   
    if (code === tagetCode) {
        submitModal.style.display = 'none';
        overlayColor.style.display = 'none';
        overlay.style.display = 'none';
        spotlight.style.zIndex = 1000;
        canOpenSuprise = true;
    } else {
    }
}


// animation

const giftClick = document.querySelector('.gift-click');
const giftBox = document.querySelector('.gift-container .gift-box');
const giftContainer = document.querySelector('.gift-container');
const giftContent = document.querySelector('.gift-content');
const giftShadow = document.querySelector('.gift-shadow');



function handleGiftClick () {
   if (canOpenSuprise) {
        if (giftClick.className === 'gift-click') {
            console.log('click');
            giftClick.classList.add('gift-click-active');
            giftBox.classList.add('active');
            giftContainer.classList.add('active');
            giftContent.classList.add('active');
            giftShadow.classList.add('active');
            giftContainer.style.zIndex = '1000';
        } else {
            giftClick.classList.remove('gift-click-active');
        }
   }
}

export {
    handleGiftClick,
    handleSubmit
}