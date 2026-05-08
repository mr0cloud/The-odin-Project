const parentDiv = document.querySelector(".divs-side");
let isDrawing = false;

document.addEventListener("mousedown", () => {
    isDrawing = true;
})
document.addEventListener("mouseup", () => {
    isDrawing = false;
})

function getDivsNumber() {
    const divSlider = document.getElementById("divSelector");
    divSlider.addEventListener("input", () => {
        drawDivs(divSlider.value);
        divNumArea.textContent = `${divSlider.value} Divs`;
    })
}

function drawDivs(divValue) {
    ///
    const colorBtn = document.getElementById("colorSelector");
    const gridSize = Math.ceil(Math.sqrt(divValue));
    const divNumArea = document.getElementById("divsNumber");
    ///

    divNumArea.textContent = `${gridSize} X ${gridSize}`;

    parentDiv.innerHTML = "";
    parentDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    parentDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("divs");
        parentDiv.appendChild(newDiv);

        newDiv.addEventListener("mouseover", () => {
            if (isDrawing) {
                newDiv.style.backgroundColor = colorBtn.value;
            };
        });
    };
}

function handleClear() {
    parentDiv.textContent = "";
}

function hnadleColorClear() {
    const allDivs = document.querySelectorAll(".divs");
    allDivs.forEach(div => {
        div.style.backgroundColor = "";
    })
}

getDivsNumber();