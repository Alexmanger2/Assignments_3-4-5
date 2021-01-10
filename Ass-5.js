let insideGrid = document.getElementById("grid");
let currentColor = document.getElementById("color-select").value;
let colorProp = false;
let columnNumber = 1;
let rowNumber = 1;

function setCurrentColor(color) {
    currentColor = color;
}


gridProps(document.getElementById("placeholder"));

function gridProps(cell) {

    //give new cell uncolored class to set to grey
    cell.classList.add("uncolored");

    //#5 select a color from a dropdown menu of colors
    //#6 click on a single cell, changing its 
    //color to the currently selected color

    cell.addEventListener("click", () => { changeColor(cell); });

    //#10 click and hold (mouseover) from a single cell (start) to 
    //a different cell (end) such that all affected/hovered-over 
    //cells from start to end change to the currently selected color

    cell.addEventListener("mousedown", () => { colorProp = true; });
    cell.addEventListener("mousemove", () => {
        if (colorProp) {
            changeColor(cell);
        }
    });
    cell.addEventListener("mouseup", () => {
        if (colorProp) {
            colorProp = false;
        }
    });

}


//#1 add rows to the grid

//select row 
var rowAdder = document.querySelector(".row");
//when row button is clicked
rowAdder.onclick = function addRow() {
    //create table row
    let row = document.createElement("tr");
    //for loop to keep track of rows
    for (let i = 0; i < columnNumber; i++) {
        //create columns for row
        let column = document.createElement("td");
        // set to uncolored
        gridProps(column);
        //put td in tr
        row.appendChild(column);
    }
    //put tr into table
    insideGrid.appendChild(row);
}

//#2 add columns to the grid
//select remove row button
rowRemover = document.querySelector(".rowRemove");
//when clicked remove row
rowRemover.onclick = function removeRow() {
    // select last row
    let row = insideGrid.lastChild;
    //remove the row
    insideGrid.removeChild(row);
    rowNumber--;
}

//#3 remove rows from the grid

//select column button
columnAdder = document.querySelector(".column");

//column button clicked
columnAdder.onclick = function addColumn() {
    // get first row
    let rows = document.getElementsByTagName("tr");
    let rowArr = [...rows];
    //console.log(rowArr);
    //add column to every row
    rowArr.forEach(row => {
        let column = document.createElement("td");
        gridProps(column);
        row.appendChild(column);
    });
    columnNumber++;
}

//#4  remove columns from the grid

//select remove button
columnRemover = document.querySelector(".columnRemove");
// when clicked
columnRemover.onclick = function removeColumn() {
    //get each row
    let rows = document.getElementsByTagName("tr");
    let rowArr = [...rows];
    //delete column from every row
    rowArr.forEach(row => {
        //column is the last row
        let column = row.lastChild;
        row.removeChild(column);
    });
    columnNumber--;
}

//#7 fill all uncolored cells with the currently selected color
let fillUncolored = document.querySelector(".fill-un");
fillUncolored.onclick = function setUncolored() {
    let cells = document.getElementsByTagName("td");
    let cellsArr = [...cells];
    let uncolored = cellsArr.filter(cell => {
        return cell.classList.contains("uncolored");
    });
    uncolored.forEach(cell => { changeColor(cell); })
}

//#8 fill all cells with the currently selected color
let setCurrent = document.querySelector(".fill-all");
setCurrent.onclick = function setAllCurrent() {
    let cells = document.getElementsByTagName("td");
    let cellsArr = [...cells];
    cellsArr.forEach(cell => { changeColor(cell); })
}

//#//9 clear all cells/restore all cells to their original/initial color
let Clear = document.querySelector(".clear");
Clear.onclick = function clearAll() {
    let cells = document.getElementsByTagName("td");
    let cellsArr = [...cells];
    cellsArr.forEach(cell => {
        cell.classList.add("uncolored");
        cell.style.backgroundColor = "grey";
    })
}

function changeColor(cell) {
    cell.style.backgroundColor = currentColor;
    cell.classList.remove("uncolored");
}

