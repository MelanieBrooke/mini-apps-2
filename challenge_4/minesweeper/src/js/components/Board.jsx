import React, { Component } from "react";
import { connect } from "react-redux";
import { createBoard, plantMines, clickHandler, reveal, gameOver } from '../reducers/boardFunctions.js';
// import { createGame, clickSpace } from '../actions/index.js';

// temp until I figure out redux
class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      gameBoardData: null,
      gameBoard: null
    }
  }

  componentDidMount() {
    var gameboard = createBoard()
    this.state.gameBoardData = gameboard;
    var gameBoard = this.createRows();
    this.state.gameBoard = gameBoard;
    this.setState({
      gameBoard: this.state.gameBoard
    })
  }

  createID (r, c) {
    var id = JSON.stringify(r) + ',' + JSON.stringify(c);
    return id;
  }

  createRows (rows=10, cols=10) {
    var tableArrays = [];
    for (var r = 0; r < rows; r++) {
      var rowArray = [];
      for (var c = 0; c < cols; c++) {
        rowArray.push(this.createCell(r, c));
      }
      tableArrays.push(rowArray);
    }
    return tableArrays;
  }

  createCell (r, c) {
    var id = this.createID(r, c)
    var onClick = () => {
      this.clickHandler(this.state.gameBoardData, r, c);
    }
    var value = this.state.gameBoardData[r][c].value;
    return(<td id={id} onClick={onClick}>[{value}]</td>)
  }

  // figure out how to use with redux/other file later

  clickHandler(board, row, col) {
    if (board[row][col].visible) {
      console.log('already clicked:', board[row][col])
      // return;
    } else if (board[row][col].mine) {
      // call a game end function here
      console.log('game over');
      // return;
    } else if (board[row][col].value) {
      board[row][col].visible = true;
    } else if (!board[row][col].value && !board[row][col].mine) {
      console.log('number or blank');
      this.reveal(board, row, col);
      // call reveal function here
      board[row][col].visible = true;
      // return;
    } else {
      console.error('I missed something');
      // return;
    }
    // this.setState({
    //   gameBoardData: this.state.gameBoardData
    // })
    console.log('after click: ', this.state.gameBoardData[row][col])
  }

  reveal (board, row, col) {
    // console.log('reveal arguments:', board, row, col)
    // console.log('reveal:', board[row][col]);
    var surrounding = [];
    // top row
    if (board[row-1] &&board[row-1][col-1] && !board[row-1][col-1].mine) {
      surrounding.push([row-1, col-1]);
    } else if (board[row-1] && board[row-1][col-1] && board[row-1][col-1].mine) {
      board[row][col].value += 1;
    }
    if (board[row-1] && board[row-1][col] && !board[row-1][col].mine) {
      surrounding.push([row-1, col]);
    } else if (board[row-1] && board[row-1][col] && board[row-1][col].mine) {
      board[row][col].value += 1;
    }
    if (board[row-1] && board[row-1][col+1] && !board[row-1][col+1].mine) {
      surrounding.push([row-1, col+1]);
    } else if (board[row-1] && board[row-1][col+1] && board[row-1][col+1].mine) {
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
    if (board[row+1] && board[row+1][col-1] && !board[row+1][col-1].mine) {
      surrounding.push([row+1, col-1]);
    } else if (board[row+1] && board[row+1][col-1] && board[row+1][col-1].mine) {
      board[row][col].value += 1;
    }
    if (board[row+1] && board[row+1][col] && !board[row+1][col].mine) {
      surrounding.push([row+1, col]);
    } else if (board[row+1] && board[row+1][col] && board[row+1][col].mine) {
      board[row][col].value += 1;
    }
    if (board[row+1] && board[row+1][col+1] && !board[row+1][col+1].mine) {
      surrounding.push([row+1, col+1]);
    } else if (board[row+1] && board[row+1][col+1] && board[row+1][col+1].mine) {
      board[row][col].value += 1;
    }
    // if space has a number, reveal the number and turn ends
    if (board[row][col].value) {
      board[row][col].visible = true;
      return;
    } else if (!board[row][col].value) {
      // if space is blank, reveal the surrounding spaces until the edges of the blank patch is reached
      for (var s = 0; s < surrounding.length; s++) {
        this.reveal(board, surrounding[s][0], surrounding[s][1]);
      }
    }
  }

  ////

  render() {
    if (this.state.gameBoard) {
      return(
        <div>
          <table>
            <tbody>
              {this.state.gameBoard.map((tableRows) => {
                return(<tr>{tableRows.map((tableCells) => {
                  return (tableCells)
                })}</tr>);
              })}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

}

// const mapStateToProps = state => {
//   return { gameBoard: state.gameBoard };
// }

// temp to test board until I figure out Redux
// const ConnectedBoard = (props) => {
// // const Board = (props) => {
//   var newBoard = createBoard();
//   // board needs to be set as state
//   var createID = (r, c) => {
//     var id = JSON.stringify(r) + ',' + JSON.stringify(c);
//     return id;
//   }

//   var createRows = (rows=10, cols=10) => {
//     var tableArrays = [];
//     for (var r = 0; r < rows; r++) {
//       var rowArray = [];
//       for (var c = 0; c < cols; c++) {
//         rowArray.push(createCell(r, c));
//       }
//       tableArrays.push(rowArray);
//     }
//     return tableArrays;
//   }

//   var createCell = (r, c) => {
//     var id = createID(r, c)
//     var onClick = () => {
//       clickHandler(newBoard, r, c);
//     }
//     var value = newBoard[r][c].value;
//     return(<td id={id} onClick={onClick}>[{value}]</td>)
//   }

//   var tableStuff = createRows();

//   return (<div>
//     <table>
//       <tbody>
//         {tableStuff.map((tableRows) => {
//           return(<tr>{tableRows.map((tableCells) => {
//             return (tableCells)
//           })}</tr>);
//         })}
//       </tbody>
//     </table>
//   </div>);
// }

// const Board = connect(mapStateToProps)(ConnectedBoard);


export default Board;