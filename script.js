const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#032033"
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;


const gridContainer = document.querySelector(".grid-container");
const sizeSlider = document.getElementById("sizeSlider");
const clearButton = document.getElementById("clearButton");
sizeSlider.onchange = (e) => changeSize(e.target.value);
clearButton.addEventListener("click", () => reloadGrid());

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// updating the grid to a current size
function updateGrid(){
    gridContainer.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    for (let i = 0; i < currentSize * currentSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('square');
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        gridContainer.appendChild(gridElement);
    }
}

// clearing the grid
function clearGrid() {
    gridContainer.innerHTML = ''
}

// clearing and updating the grid to a new size
function reloadGrid(){
    clearGrid();
    updateGrid();
}

function changeSize(value) {
    currentSize = value;
    reloadGrid();
}
function changeColor(e){

    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

window.onload = () => {
    updateGrid(DEFAULT_SIZE)
}