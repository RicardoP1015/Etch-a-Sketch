const etchSketch = document.querySelector('.etch-sketch-container');

const createEtchGrid = (amount) => {
    for (let i = 0; i < amount; i++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block')
        etchSketch.appendChild(newBlock);
    }
}

createEtchGrid(1)