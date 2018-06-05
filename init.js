
const gridConfig = {
    numberOfColumns: 8, 
    numberOfCellsInColumn: 8, 
    parentElement: document.querySelector("main"),
    cellWidth: "3rem",
    cellHeight: "3rem",
    defaultCellStyleClasses: ["unclicked"]
}
const newGame = new Grid(gridConfig)
