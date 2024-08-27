import { dotLottie } from "./lottie.js";
const spiderAnimation = document.querySelector('#spider-animation');
spiderAnimation.style.top = '0px';
let isSpiderAnimation = false;

function handleSpiderAnimation () {
    if (isSpiderAnimation) return;
    isSpiderAnimation = true;
    dotLottie.play()
    setTimeout(() => {
        isSpiderAnimation = false;
    }, 8000);
}

const spiderCode = 8
export {
    handleSpiderAnimation,
    spiderCode
}
