const canvas = document.querySelector("#sketchCanvas");
const sizeofCanvas = document.querySelector("#button");
const hoverColor = document.querySelectorAll(".hoverColor");
const brushColor = document.querySelector("#changeColor");
let defaultBrushColor = brushColor.value;
defaultBrushColor = "0000000";
const brushSize = document.querySelector("#changeBrushSize");
const currentSize = 32;

//Create 1 single cube 
function createCube() {
    const cubes = document.createElement("div");
    cubes.classList.add("hoverColor");
    cubes.style.height = 16;
    cubes.style.width = 16;
    cubes.style.border = "solid 0.5px gray"
    canvas.appendChild(cubes)
}

//Create grid
function createGrid(number) {
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${number}, 1fr)`
    let totalCubes = number * number
    for (let i = 0; i < totalCubes; i++) {
        createCube()
    }
    ;
}
//Default hover color
function hover() {
    const hoverColor = document.querySelectorAll(".hoverColor");
    for (let i = 0; i < hoverColor.length; i++) {
        hoverColor[i].addEventListener("mouseover", function () {
            hoverColor[i].style.backgroundColor = defaultBrushColor;
        })
    }
}
//Chosen hover color
function appliedColor() {  
    const hoverColor = document.querySelectorAll(".hoverColor");
    for (let i = 0; i < hoverColor.length; i++) {
        hoverColor[i].addEventListener("mouseover", function () {
            hoverColor[i].style.backgroundColor = brushColor.value;
        })
  }
}

sizeofCanvas.addEventListener("click", function () {
    let newSize = prompt("Enter a number", 0);
    Number(newSize);
    if (newSize < 51) {
        createGrid(newSize);
    } else {
        alert("Canvas is too big!")
    }
});
brushColor.addEventListener("change", appliedColor)


createGrid(currentSize);
hover();