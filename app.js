(function(document, window, undefined){

function createGrid(number) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        gridContainer.appendChild(div);
    }
    document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
}

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";

}

const randomColor = randomBgColor();

function changeColor(event){
    event.target.style.backgroundColor = randomColor;
}

function resetGrid() {
    let num = prompt("Enter a number below 100 for the grid size:", "16");
    if (num === undefined || num === null || num === "") {
        return;
    }
    while (num > 100){
        num = prompt("Number is too large.  Must be less than 100:");
    }
    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(num);
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}

function clearGrid() {
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

const clearButton = document.querySelector(".clear-button");
const resetButton = document.querySelector(".reset-button");

clearButton.addEventListener("click", clearGrid);
resetButton.addEventListener("click", resetGrid);


})(document, window)