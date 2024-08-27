

let canLaunchModal = false;
let fistClick = false;

const canvas = document.createElement('canvas');
canvas.id = "dotLottie-canvas"

function handleModalClose() {
    document.querySelectorAll('.modal-container').forEach((modal) => {
        modal.style.display = 'none';
    });
}

function handleClickContinue() {
    if (fistClick) {
        canLaunchModal = true;
    }

    if (canLaunchModal) {
        document.querySelector('#div-emoji').appendChild(canvas)
    }
    fistClick = true;
}

export {
    handleModalClose,
    handleClickContinue
}