document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
  {row: 0,
  col: 0,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true, 
  surroundingMines: countSurroundingMines,
  //..
},
  {row: 0,
  col: 1,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 0,
  col: 2,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
{row: 0,
  col: 3,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 1,
  col: 0,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 1,
  col: 1,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 1,
  col: 2,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
{row: 1,
  col: 3,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 2,
  col: 0,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 2,
  col: 1,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 2,
  col: 2,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
{row: 2,
  col: 3,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 3,
  col: 0,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 3,
  col: 1,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  {row: 3,
  col: 2,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
{row: 3,
  col: 3,
  isMine: Math.random() >= 0.6,
  isMarked: false,
  hidden: true,
  surroundingMines: countSurroundingMines,
//..
},
  ]
}

function startGame () {
    // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    let cellsArr = board.cells
  for(let i = 0; i < cellsArr.length; i++){
    if(cellsArr[i].isMine === true && cellsArr[i].isMarked === false) {
      return
    }
    if(cellsArr[i].hidden === true && cellsArr[i].isMine === false){
      return
    }
  }
     // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    lib.displayMessage('You win!');
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  // var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);
  
  let surroundingMines = 0
  surrounding.forEach(cell => {
    if(cell.isMine === true) {
      surroundingMines += 1
    }
  })
    return(surroundingMines)
  }
  board.cells.forEach(cell => {
    cell.surroundingMines = countSurroundingMines({row: cell.row, col: cell.col})
  })
