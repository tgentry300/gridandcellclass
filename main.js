function Grid(numberOfRows, numberOfColumns, parentElement) {
    this.numberOfRows = numberOfRows
    this.numberOfColumns = numberOfColumns
    this.parentElement = parentElement
}
Grid.prototype = {
    createGameGridArray: function () {
        return Array(this.numberOfRows).fill('0').map(() => new Array(this.numberOfColumns).fill('0'))
    },
    
    createColumn: function () {
        for (let colIndex in this.createGameGridArray()) {
            this.cellArray = []
            const colElement = document.createElement("div")
            colElement.classList.add("column")
            this.parentElement.appendChild(colElement)
            for (let cellIndex in this.createGameGridArray()[colIndex]) {
                const cell = newCell.createCell()
                this.cellArray.push(cell)
                colElement.appendChild(cell)
            }
            console.log(this.cellArray)
        }
    },

}

function Cell(width, height, backgroundColor) {
    this.width = width
    this.height = height
    this.backgroundColor = backgroundColor
}

Cell.prototype = {

    createCell: function () {
        const cellElement = document.createElement("div")
        cellElement.classList.add("cell")
        return cellElement
        console.log(cellElement)
    }
}

const newGame = new Grid(10, 10, document.querySelector("main"))
const newCell = new Cell()
newGame.createGameGridArray()
newGame.createColumn()
newCell.createCell()