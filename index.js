const canvas = document.querySelector("#sketchCanvas");
const sizeofCanvas = document.querySelector("#button");
const brushColor = document.querySelector("#changeColor");
const brushSize = document.querySelector("#changeBrushSize");
const rainbow = document.querySelector("#changeRainbow");
const erase = document.querySelector("#changeErase");
const currentSize = 32;
let shouldErase = false;
let shouldRainbow = false;




//Create 1 single cube 
function createCube() {
    const cubes = document.createElement("div");
    cubes.classList.add("hoverColor");
    cubes.style.height = "16px";
    cubes.style.width = "16px";
    cubes.style.border = "solid 0.5px gray";
    canvas.appendChild(cubes);
}

//Create grid
function createGrid(number) {
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    let totalCubes = number * number;
    for (let i = 0; i < totalCubes; i++) {
        createCube()
    }
    appliedColor();
}

//Chosen hover color
function appliedColor() {
    const hoverColor = document.querySelectorAll(".hoverColor");
    for (let i = 0; i < hoverColor.length; i++) {
        hoverColor[i].addEventListener("mouseover", function () {
            console.log("shouldErase " + shouldErase)
            console.log("shouldRainbow" + shouldRainbow)
            if (shouldErase == true) {
                hoverColor[i].style.backgroundColor = "white";
            } else if (shouldRainbow == true) {
                let rainbowColor = Math.floor(Math.random() * 16777215).toString(16);
                hoverColor[i].style.backgroundColor = "#" + rainbowColor;
            }
            else {
                hoverColor[i].style.backgroundColor = brushColor.value;
            }
        })
    }
}


sizeofCanvas.addEventListener("click", function () {
    let newSize = prompt("Enter a number", 0);
    newSize = Number(newSize);
    if (newSize < 41) {
        createGrid(newSize);
    } else {
        alert("Canvas is too big!")
    }
});

brushColor.addEventListener("change", function () {
    shouldErase = false;
    shouldRainbow = false;
    console.log("shouldErase " + shouldErase)
    console.log("shouldRainbow" + shouldRainbow)
})

erase.addEventListener("click", function () {
    shouldRainbow = false;
    shouldErase = true;
    console.log("shouldErase " + shouldErase)
    console.log("shouldRainbow" + shouldRainbow)
})

rainbow.addEventListener("click", function () {
    shouldErase = false;
    shouldRainbow = true;
    console.log("shouldErase " + shouldErase)
    console.log("shouldRainbow" + shouldRainbow)
})



createGrid(currentSize);
