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
    for (let i = 0; i < number; i++) {
        createCube()
    }
}
createGrid(256)

const color = document.querySelectorAll(".hoverColor")
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("mouseover", function () {
        color[i].style.backgroundColor = "black";
    })
}
