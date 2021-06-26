const createBoard = (rows=10, cols=10, mines=10) => {
  var board = [];
  for (var row = 0; row < rows; row++) {
    board.push([])
    for (var col = 0; col < cols; col++) {
      var spaceObj = {
        value: 0,
        mine: false,
        visible: false,
        marked: false,
        id: [row, col],
        surrounding: []
      };
      board[row].push(spaceObj);
      // board[row].push({
      //   value: 0,
      //   mine: false,
      //   visible: false,
      //   id: [row, col],
      //   surrounding: []
      // })
    }
  }
  plantMines(board, rows, cols, mines);
  return board;
}

const plantMines = (board, rows, cols, mines) => {
  var planted = 0;
  while (planted < mines) {
    var r = Math.floor(Math.random() * rows);
    var c = Math.floor(Math.random() * cols);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      board[r][c].value = 'm';
      planted += 1;
    }
  }
  return board;
}

// copied into Board component temporarily to try to make sure things are working
// remember to copy working code back here
const clickHandler = (board, row, col) => {
  // console.log('called', row, ',', col);
  console.log('space info:', board[row][col])
  if (board[row][col].visible) {
    return;
  } else if (board[row][col].mine) {
    // call a game end function here
    console.log('game over');
    return;
  } else if (board[row][col].value) {
    board[row][col].visible = true;
  } else if (!board[row][col].value && !board[row][col].mine) {
    console.log('number or blank');
    reveal(board, row, col);
    // call reveal function here
    board[row][col].visible = true;
    return;
  } else {
    console.error('I missed something');
    return;
  }
}

const reveal = (board, row, col) => {
  // create array of surrounding spaces
  // count how many surrounding have mines and change value accordingly
  // surrounding space is revealed if blank or a number
  // if blank, that one is checked for surrounding as well
  var surrounding = [];
  // top row
  if (board[row-1][col-1] && !board[row-1][col-1].mine) {
    surrounding.push([row-1, col-1]);
  } else if (board[row-1][col-1] && board[row-1][col-1].mine) {
    board[row][col].value += 1;
  }
  if (board[row-1][col] && !board[row-1][col].mine) {
    surrounding.push([row-1, col]);
  } else if (board[row-1][col] && board[row-1][col].mine) {
    board[row][col].value += 1;
  }
  if (board[row-1][col+1] && !board[row-1][col+1].mine) {
    surrounding.push([row-1, col+1]);
  } else if (board[row-1][col+1] && board[row-1][col+1].mine) {
    board[row][col].value += 1;
  }
  // sides
  if (board[row][col-1] && !board[row][col-1].mine) {
    surrounding.push([row, col-1]);
  } else if (board[row][col-1] && board[row][col-1].mine) {
    board[row][col].value += 1;
  }
  if (board[row][col+1] && !board[row][col+1].mine) {
    surrounding.push([row, col+1]);
  } else if (board[row][col+1] && board[row][col+1].mine) {
    board[row][col].value += 1;
  }
  // bottom row
  if (board[row+1][col-1] && !board[row+1][col-1].mine) {
    surrounding.push([row+1, col-1]);
  } else if (board[row+1][col-1] && board[row+1][col-1].mine) {
    board[row][col].value += 1;
  }
  if (board[row+1][col] && !board[row+1][col].mine) {
    surrounding.push([row+1, col]);
  } else if (board[row+1][col] && board[row+1][col].mine) {
    board[row][col].value += 1;
  }
  if (board[row+1][col+1] && !board[row+1][col+1].mine) {
    surrounding.push([row+1, col+1]);
  } else if (board[row+1][col+1] && board[row+1][col+1].mine) {
    board[row][col].value += 1;
  }
  // if space has a number, reveal the number and turn ends
  if (board[row][col].value) {
    board[row][col].visible = true;
    return;
  } else if (!board[row][col].value) {
    // if space is blank, reveal the surrounding spaces until the edges of the blank patch is reached
    for (var s = 0; s < surrounding.length; s++) {
      reveal(board, surrounding[s][0], surrounding[s][1]);
    }
  }
}

const gameOver = () => {
  // declare the player a winner or loser, reveal all mines
}

export {
  createBoard,
  plantMines,
  clickHandler,
  reveal,
  gameOver
}