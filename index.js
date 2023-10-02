const etchSketch = document.querySelector('.etch-sketch-container');

const createBlock = (blockSize) => {
    const newBlock = document.createElement('div');
    newBlock.classList.add('block');
    newBlock.style.width = `${blockSize}px`;
    newBlock.style.height = `${blockSize}px`;
    return newBlock;
}

const createEtchGrid = (amount) => {
    const etchSize = etchSketch.clientWidth / amount;
    for (let i = 0; i < amount; i++) {
        for (let j = 0; j < amount; j++) {
            etchSketch.appendChild(createBlock(etchSize));
        }
    }
}

createEtchGrid(4);