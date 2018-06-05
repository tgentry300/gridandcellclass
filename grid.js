function Grid({ numberOfColumns, numberOfCellsInColumn, parentElement, cellWidth, cellHeight, defaultCellStyleClasses = [] }) {
    this.numberOfColumns = numberOfColumns
    this.numberOfCellsInColumn = numberOfCellsInColumn
    this.parentElement = parentElement
    this.cellWidth = cellWidth
    this.cellHeight = cellHeight
    this.defaultCellStyleClasses = defaultCellStyleClasses
    
    this.createGameGridArray()
    this.createColumn()

}


Grid.prototype = {
    createGameGridArray: function () {
        return Array(this.numberOfCellsInColumn).fill('0').map(() => new Array(this.numberOfColumns).fill('0'))
    },


    createColumn: function () {
        this.cellArray = []
        for (let colIndex in this.createGameGridArray()) {
            const colElement = document.createElement("div")
            colElement.classList.add("column")
            
            this.cellArray.push([])
            this.parentElement.appendChild(colElement)
            for (let cellIndex in this.createGameGridArray()[colIndex]) {
                const cell = new Cell(colIndex, cellIndex, this.cellWidth, this.cellHeight, this.defaultCellStyleClasses)
                this.cellArray[colIndex].push(cell)
                colElement.appendChild(cell.element)
            }
        }
    },


    findSpecificCell: function (colIndex, cellIndex) {
        console.log(this.cellArray)
        const col = this.cellArray[colIndex]

        if (col) {
            return col[cellIndex]
        }
        return null
    },
    
    findNeighboringCells: function (cell) {
        const colIndex = Number(cell.element.dataset.column)
        const cellIndex = Number(cell.element.dataset.cell)
        const arrayOfCells = []
        const neighborCoords = {
            cellAbove: [colIndex, cellIndex - 1],
            cellRight: [colIndex + 1, cellIndex],
            cellDown: [colIndex, cellIndex + 1],
            cellLeft: [colIndex - 1, cellIndex],
            cellAboveRight: [colIndex + 1, cellIndex - 1],
            cellAboveLeft: [colIndex - 1, cellIndex - 1],
            cellDownRight: [colIndex + 1, cellIndex + 1],
            cellDownLeft: [colIndex - 1, cellIndex + 1],
        }
        Object.values(neighborCoords).forEach(coords => {
            const neighborCell = this.findSpecificCell(coords[0], coords[1])
            if (neighborCell) {
                arrayOfCells.push(neighborCell)
                cell.addToNeighborCells(neighborCell)
            }
        });

        return arrayOfCells
    },
}













