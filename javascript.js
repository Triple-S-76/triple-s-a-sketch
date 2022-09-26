
let numberOfCells = 25;
let canvas = document.getElementById('canvas');
addCells(numberOfCells);

// addCells = add all cells to the canvas
function addCells(num) {
    
    for (rowNumber = 1 ; rowNumber <= num ; rowNumber++) {
        let newRow = document.createElement('div');
        newRow.id = 'row-' + rowNumber;
        newRow.className = 'allRows';
        canvas.appendChild(newRow);
        for (cellNumber = 1 ; cellNumber <= num ; cellNumber++) {
            let newRowForCell = document.getElementById('row-' + rowNumber);
            let newCell = document.createElement('div');
            newCell.classList.add('allCells', 'no-color');
            newCell.id = 'cell-' + rowNumber + '-' + cellNumber;
            newCell.style.opacity = "0.0";
            newRowForCell.appendChild(newCell);
        }
    }

    let allCellsCollection = document.getElementsByClassName('allCells');
    let allCellsArray = Array.from(allCellsCollection);
    allCellsArray.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {(cellColor(this));
        })
    })
}

let randomColor = 'no';
let colorChosen = 'black';
let colorChosenOrRandom = 'black';

let colorPicker = document.querySelectorAll('.color');
colorPicker.forEach(function(cell) {
    cell.addEventListener('click', changeColor)
})

function changeColor() {
    colorChosen = this.value;
    colorChosenOrRandom = this.value;
    if (this.value == 'random') {
        randomColor = 'yes'
    } else {
        randomColor = 'no'
    }
}

function cellColor(singleCell) {
    if (singleCell.classList.contains('no-color')) {
        if (randomColor == 'yes') {colorChosen = randomHSL()}
        singleCell.style.backgroundColor = colorChosen;
        singleCell.classList.remove('no-color');
        singleCell.classList.add(colorChosenOrRandom);
        opacity(singleCell);
    } else if (singleCell.classList.contains(colorChosenOrRandom)) {
        opacity(singleCell);
    }    
}

let penOrPencilPicker = document.querySelectorAll('.pen-or-pencil')
penOrPencilPicker.forEach(function(item) {
    item.addEventListener('click', penOrPencil);
})

let penOrPencilChosen = 'pen';

function penOrPencil() {
        penOrPencilChosen = this.value;
}

function opacity(singleCell) {
    if (penOrPencilChosen == 'pen') {
        singleCell.style.opacity = 1;
    } else {
        let cellOpacity = singleCell.style.opacity
        let newOpacity = parseFloat(cellOpacity) + 0.1;
        singleCell.style.opacity = newOpacity;
    }
}

let button = document.querySelector('#btn');
button.addEventListener('click', shakeScreen);

let buttonPressed = 'yes';

function runSetup() {
    button.innerText = 'Press to shake';
    removeAllCells();
}

function removeAllCells() {
    let canvas = document.getElementById('canvas');
    canvas.replaceChildren();
    addCells(numberOfCells);
}

let canvasSizePicker = document.querySelectorAll('.canvas-size');
canvasSizePicker.forEach(function(button) {
    button.addEventListener('click', changeCanvasSize)
})

function changeCanvasSize() {
    canvas.removeAttribute('class')
    canvas.className = 'canvas-' + this.value;
}

let resetEntireSketchPadButton = document.getElementById('reset-btn')
resetEntireSketchPadButton.addEventListener('click', resetPad);

function resetPad() {
    let pixels = document.getElementById('pixels');
    numberOfCells = pixels.value;
    shakeScreen()
}

function randomHSL() {
    let h = randomHue();
    let s = randomPercentage();
    let l = randomPercentage();
    return('hsl(' + h + ', ' + s + '%, ' + l +  '%)');
}

function randomHue() {
    return Math.floor(Math.random() * (360));
}

function randomPercentage () {
    return Math.floor(Math.random() * (101));
}

function shakeScreen() {
    
    if (buttonPressed == 'no') {
        buttonPressed = 'yes';
        runSetup();
    } else {
        let sketchcontainer = document.querySelector('#sketchcontainer');
        sketchcontainer.classList.add('sketchshake');
        delay();
    };
}

function delay() {
    setTimeout(function() {
        sketchcontainer.classList.remove('sketchshake');
        runSetup();
    }, 1100)    
}
