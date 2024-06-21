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

function changeColor(event){
    event.target.style.backgroundColor = "black";
}

let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});


})(document, window)