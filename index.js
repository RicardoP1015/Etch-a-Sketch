const etchSketch = document.querySelector('.etch-sketch-container');
const gridSizeDisplay = document.querySelector('.grid-size')
const subBtn = document.querySelector('.minus');
const addBtn = document.querySelector('.add');
const restBtn = document.getElementById('rest-btn');
let currentGridSize = 16;
const defaultGridSize = currentGridSize;


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

const clearGrid = () => {
    while (etchSketch.firstChild) {
        etchSketch.removeChild(etchSketch.lastChild);
    }
    createEtchGrid(currentGridSize)
} 

const subValue = () => {
    if (currentGridSize > 4) {
        currentGridSize -= 4;
    }
    clearGrid()
    gridSizeDisplay.textContent = `${currentGridSize}x${currentGridSize}`;
    createEtchGrid(currentGridSize);
    clearGrid();
}

const addValue = () => {
    if (currentGridSize < 100) {
        currentGridSize += 4
    }
    gridSizeDisplay.textContent = `${currentGridSize}x${currentGridSize}`;
    createEtchGrid(currentGridSize);
    clearGrid();
}

const restGrid = () => {
    currentGridSize = defaultGridSize;
    gridSizeDisplay.textContent = `${currentGridSize}x${currentGridSize}`;
    clearGrid()
}

createEtchGrid(defaultGridSize);

subBtn.addEventListener('click', subValue);
addBtn.addEventListener('click', addValue);
restBtn.addEventListener('click', restGrid);
