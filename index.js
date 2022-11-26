function createCube() {
    const canvas = document.querySelector("#sketchCanvas");
    const cubes = document.createElement("div")
    cubes.classList.add("hoverColor")
    cubes.style.height = 16;
    cubes.style.width = 16;
    cubes.style.border = "solid 0.5px gray"
    canvas.appendChild(cubes)
}
function createGrid(number) {
    const sketch = document.querySelector("#sketchCanvas");
    sketch.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    sketch.style.gridTemplateRows = `repeat(${number}, 1fr)`
    let totalCubes = number * number
    for (let i = 0; i < totalCubes; i++) {
        createCube()
    }
}
createGrid(32)

const color = document.querySelectorAll(".hoverColor")
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("mouseover", function () {
        color[i].style.backgroundColor = "black";
    })
}


const button = document.querySelector("#button");
button.addEventListener("click", function () {
    let number = prompt("Enter a number", 0);
    Number(number);
    if (number < 51) {
        createGrid(number);
    } else {
        alert("Canvas is too big!")
    }
});

