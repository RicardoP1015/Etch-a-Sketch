const etchSketch = document.querySelector('.etch-sketch-container');
const gridSizeDisplay = document.querySelector('.grid-size')
const blackColor = document.getElementById('color-black-btn');
const rgbBtn = document.getElementById('rgb-btn');
const subBtn = document.getElementById('sub-btn');
const addBtn = document.getElementById('add-btn');
const restBtn = document.getElementById('rest-btn');
const clearBtn = document.getElementById('clear-btn');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let selectedColor = 'black';
let currentGridSize = 16;
const defaultGridSize = currentGridSize;

const createBlock = (blockSize) => {
    const newBlock = document.createElement('div');
    newBlock.classList.add('block');
    newBlock.style.width = `${blockSize}px`;
    newBlock.style.height = `${blockSize}px`;
    return newBlock;
};

const createEtchGrid = (amount) => {
    const etchSize = etchSketch.clientWidth / amount;
    for (let i = 0; i < amount; i++) {
        for (let j = 0; j < amount; j++) {
            const block = createBlock(etchSize);
            block.addEventListener('mouseover', () => {
                block.style.backgroundColor = selectedColor;
            });
            etchSketch.appendChild(block);
        };
    };
};

const clearGrid = () => {
    while (etchSketch.firstChild) {
        etchSketch.removeChild(etchSketch.lastChild);
    };
    createEtchGrid(currentGridSize);
};

const subValue = () => {
    if (currentGridSize > 4) {
        currentGridSize -= 4;
    };
    clearGrid();
    gridSizeDisplay.textContent = `${currentGridSize}x${currentGridSize}`;
    createEtchGrid(currentGridSize);
    clearGrid();
};

const addValue = () => {
    if (currentGridSize < 100) {
        currentGridSize += 4;
    };
    gridSizeDisplay.textContent = `${currentGridSize}x${currentGridSize}`;
    createEtchGrid(currentGridSize);
    clearGrid();
};

const restGrid = () => {
    currentGridSize = defaultGridSize;
    gridSizeDisplay.textContent = `${currentGridSize}x${currentGridSize}`;
    clearGrid();
};

const HoverEffect = (side) => {
    side.style.color = 'black';
};

const removeHoverEffect = (side) => {
    side.style.color = 'transparent';
};

subBtn.addEventListener('click', subValue);
subBtn.addEventListener('mouseover', () => {
    HoverEffect(left);
});
subBtn.addEventListener('mouseout', () => {
    removeHoverEffect(left);
});
addBtn.addEventListener('click', addValue);
addBtn.addEventListener('mouseover', () => {
    HoverEffect(right);
});
addBtn.addEventListener('mouseout', () => {
    removeHoverEffect(right);
});
restBtn.addEventListener('click', restGrid);
clearBtn.addEventListener('click', clearGrid);
blackColor.addEventListener('click', () => {
    selectedColor = 'black'
});
rgbBtn.addEventListener('change', () => {
    selectedColor = rgbBtn.value;
});

createEtchGrid(defaultGridSize);