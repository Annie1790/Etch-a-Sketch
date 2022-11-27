const canvas = document.querySelector("#sketchCanvas");
const currentSize = 32;

function createCube() {
    const cubes = document.createElement("div");
    cubes.classList.add("hoverColor");
    cubes.style.height = 16;
    cubes.style.width = 16;
    cubes.style.border = "solid 0.5px gray"
    canvas.appendChild(cubes)
}
function createGrid(number) {
    canvas.innerHTML = "";
    canvas.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${number}, 1fr)`
    let totalCubes = number * number
    for (let i = 0; i < totalCubes; i++) {
        createCube()
    }
    hover();
}

function hover() {
    const color = document.querySelectorAll(".hoverColor")
    for (let i = 0; i < color.length; i++) {
        color[i].addEventListener("mouseover", function () {
            color[i].style.backgroundColor = "black";
        })
    }
}

createGrid(currentSize);

const button = document.querySelector("#button");
button.addEventListener("click", function () {
    let newNumOfGrid = prompt("Enter a number", 0);
    Number(newNumOfGrid);
    if (newNumOfGrid < 51) {
        createGrid(newNumOfGrid);
    } else {
        alert("Canvas is too big!")
    }
});

