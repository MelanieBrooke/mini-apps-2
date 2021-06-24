const createBoard = (rows=10, cols=10, mines=10) => {
  var board = [];
  for (var row = 0; row < rows; row++) {
    board.push([])
    for (var col = 0; col < cols; col++) {
      board[row].push({
        value: 0,
        mine: false,
        visible: false
      })
    }
  }
  plantMines(board, rows, cols, mines)
  return board;
}

const plantMines = (board, rows, cols, mines) => {
  var planted = 0;
  while (planted > mines) {
    var r = Math.floor(Math.random() * rows);
    var c = Math.floor(Math.random() * cols);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      planted += 1;
    }
  }
  return board;
}

const clickSpace = (board, row, col) => {
  if (board[row][col].visible) {
    return;
  } else if (board[row][col].mine) {
    // call a game end function here
    console.log('game over');
    return;
  } else if (board[row][col].value) {
    board[row][col].visible = true;
  } else if (!board[row][col].value && !board[row][col].mine) {
    console.log('blank');
    // call reveal function here
    board[row][col].visible = true;
    return;
  } else {
    console.error('I missed something');
    return;
  }
}

const reveal = (board, row, col) => {
  // check surrounding spaces to reveal other 0 value spaces
}

const gameOver = () => {
  // declare the player a winner or loser, reveal all mines
}