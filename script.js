const gridContainer = document.querySelector(".grid-container");

let size = 16;
function updateGrid(){
gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;


for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('square');
    // gridElement.addEventListener('mouseover', changeColor)
    // gridElement.addEventListener('mousedown', changeColor)
    gridContainer.appendChild(gridElement);
}}
updateGrid(16);
function clearGrid() {
    gridContainer.innerHTML = ''
}
function reloadGrid(){
    clearGrid();
    updateGrid();
}

const sizeSlider = document.getElementById('sizeSlider');
sizeSlider.onmousemove = (e) => changeSize(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
function changeSize(value) {
    size = value;
    reloadGrid();
}