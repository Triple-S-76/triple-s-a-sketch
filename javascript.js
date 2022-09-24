let canvas = document.getElementById('canvas');

function addBoxes(num) {

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

addBoxes(20);
