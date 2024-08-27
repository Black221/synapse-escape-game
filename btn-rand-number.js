

const randNumberDisplay = document.querySelector('#rand-number-display');   


let randNumber;

const randNumberColor = [
    '#0f0',
    '#00f',
    '#ff0',
    '#f0f',
    '#0ff',
    '#000'
];

const handleRandomNumber = () => {
    randNumber = (Math.random() * 10).toFixed(0);
    document.querySelector('#rand-indice').style.display = 'block';
    randNumberDisplay.textContent = randNumber;

    randNumberDisplay.style.top = `${Math.random() * 100}vh`;
    randNumberDisplay.style.left = `${Math.random() * 100}vw`;

    randNumberDisplay.style.color = randNumberColor[(Math.random() * randNumberColor.length).toFixed(0)];
}

export {
    handleRandomNumber,
    randNumber
}
