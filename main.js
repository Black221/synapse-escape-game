import { handleModalClose } from './modal.js';
import { handleColorAnimation } from './btn-color.js';
import { handleSpiderAnimation } from './btn-spider.js';
import { handleCountClick } from './btn-count-click.js';
import { handleRandomNumber } from './btn-rand-number.js';
import { handleSubmit } from './btn-submit.js';


window.addEventListener('click', handleClick);



function handleClick(e) {
    document.elementsFromPoint(e.clientX, e.clientY).find((element) => {

        if (element.classList.contains('btn-fool')) {
            handleClickContinue;
        }

        else if (element.classList.contains('modal-btn-close')) {
            handleModalClose();
        }

        else if (element.id === 'btn-color') {
            handleColorAnimation();
        } 
        
        else if (element.id === 'btn-spider') {
            handleSpiderAnimation();
        }

        else if (element.id === 'btn-count-click') {
            console.log('btn-count-click');
            handleCountClick();
        }

        else if (element.id === 'btn-rand-number') {
            handleRandomNumber();
        }

        else if (element.id === 'btn-submit') {
            handleSubmit();
        }
    });
}