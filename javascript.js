let canvas = document.getElementById('canvas');

// addCells add all cells to the canvas
function addCells(num) {
    for (rowNumber = 1 ; rowNumber <= num ; rowNumber++) {
        let newRow = document.createElement('div');
        newRow.id = 'row-' + rowNumber;
        newRow.className = 'allRows';
        canvas.appendChild(newRow);
        for (cellNumber = 1 ; cellNumber <= num ; cellNumber++) {
            let newRowForCell = document.getElementById('row-' + rowNumber);
            let newCell = document.createElement('div');
            newCell.className = 'allCells';
            newCell.id = 'cell-' + rowNumber + '-' + cellNumber;
            newRowForCell.appendChild(newCell);
        }
    }    
}

addCells(50);

let allCellsCollection = document.getElementsByClassName('allCells');
let allCellsArray = Array.from(allCellsCollection);
allCellsArray.forEach(function(cell) {
    cell.addEventListener('mouseover', function() {
        cell.classList.add('coloredCell');
    })
})
