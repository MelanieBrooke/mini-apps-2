import React, { Component } from "react";
import { connect } from "react-redux";
import { createBoard, plantMines, clickHandler, reveal, gameOver } from '../reducers/boardFunctions.js';
import Grid from './Grid.jsx';
import Restart from './Restart.jsx';
// import { createGame, clickSpace } from '../actions/index.js';

// temp until I figure out redux
class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      gameBoardData: null,
      gameBoard: null,
      end: false,
      win: false
    }
    this.restartClick = this.restartClick.bind(this);
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
    var onClick = (e) => {
      this.clickHandler(this.state.gameBoardData, r, c);
    }
    var rightClick = (e) => {
      e.preventDefault();
      this.rightClickHandler(this.state.gameBoardData, r, c);
    }
    var value = this.state.gameBoardData[r][c].value;
    var marked = this.state.gameBoardData[r][c].marked;
    var mine = this.state.gameBoardData[r][c].mine;
    var visible = this.state.gameBoardData[r][c].visible;
    var end = this.state.gameBoardData[r][c].end;
    var clicked = this.state.gameBoardData[r][c].clicked;

    // This is about to get ridiculous but it's not letting me add multiple classes so HERE WE GO

    // if space is not visible and not marked
    if (!visible && !marked) {
      return (
        <td id={id} onContextMenu={(e) => rightClick(e)} onClick={onClick} className="hidden"><div className="box"></div></td>
      );
    } else if (!visible && marked) {
      // if space is not visible and marked
      return (
        <td id={id} onContextMenu={(e) => rightClick(e)} onClick={onClick} className="marked"><div className="box"><img src="flag_icon.png"></img></div></td>
      );
    } else if (visible && value === 0) {
      // if space is visible and blank
      return (
        <td id={id} onContextMenu={(e) => e.preventDefault()} onClick={onClick} className="blank"><div className="box"></div></td>
      );
    } else if (visible && value && typeof value === 'number') {
      // if space is visible and has a value
      return (
        <td id={id} onContextMenu={(e) => e.preventDefault()} onClick={onClick} className={!end ? "showNum":"end"}><div className="box">{value}</div></td>
      );
    } else if (mine && visible && clicked) {
      // if space is a mine that was clicked on
      return (
        <td id={id} onContextMenu={(e) => e.preventDefault()} onClick={onClick} className="dead"><div className="box"><img src="bomb.png"></img></div></td>
      );
    } else if (mine && visible && !clicked) {
      // if space is a mine that wasn't clicked on come game over
      return (
        <td id={id} onContextMenu={(e) => e.preventDefault()} onClick={onClick} className="mine"><div className="box"><img src="bomb.png"></img></div></td>
      );
    }

    // return (
    //   <td id={id} onContextMenu={(e) => rightClick(e)} onClick={onClick} className={this.state.gameBoardData[r][c].visible ? "visible":"hidden"}>[{value}]</td>
    // )
  }

  // figure out how to use with redux/other file later

  rightClickHandler(board, row, col) {
    board[row][col].marked = !board[row][col].marked;
    var gameBoard = this.createRows();
    this.state.gameBoard = gameBoard;
    this.setState({
      gameBoard: this.state.gameBoard
    });
    return;
  }

  clickHandler(board, row, col) {
    // this.visibilityHandler(row, col)
    var space = board[row][col];
    if (space.visible) {
      return;
    } else if (space.mine) {
      // call a game end function here
      space.visible = true;
      space.clicked = true;
      var gameBoard = this.createRows();
      this.state.gameBoard = gameBoard;
      this.setState({
        gameBoard: this.state.gameBoard
      });
      this.gameEnd('lose');
      return;
    } else if (space.value) {
      space.visible = true;
      if (this.checkWin(board)) {
        this.gameEnd('win');
      }
      return;
    } else if (!space.value && !space.mine) {
      space.visible = true;
      this.reveal(board, row, col);
      // call reveal function here
      var gameBoard = this.createRows();
      this.state.gameBoard = gameBoard;
      this.setState({
        gameBoard: this.state.gameBoard
      });
      if (this.checkWin(board)) {
        this.gameEnd('win');
      }
      return;
    } else {
      console.error('I missed something');
      return;
    }
  }

  reveal (board, row, col) {
    var space = board[row][col];
    space.visible = true;
    // if the space has already been checked and has a value, stop the function here so false value is not added on
    if (typeof space.value === 'number' && space.value > 0) {
      return;
    }
    var surrounding = [];
    // top row
    if (board[row-1] &&board[row-1][col-1] && !board[row-1][col-1].mine && !board[row-1][col-1].visible) {
      surrounding.push([row-1, col-1]);
    } else if (board[row-1] && board[row-1][col-1] && board[row-1][col-1].mine) {
      space.value += 1;
    }
    if (board[row-1] && board[row-1][col] && !board[row-1][col].mine && !board[row-1][col].visible) {
      surrounding.push([row-1, col]);
    } else if (board[row-1] && board[row-1][col] && board[row-1][col].mine) {
      space.value += 1;
    }
    if (board[row-1] && board[row-1][col+1] && !board[row-1][col+1].mine && !board[row-1][col+1].visible) {
      surrounding.push([row-1, col+1]);
    } else if (board[row-1] && board[row-1][col+1] && board[row-1][col+1].mine) {
      space.value += 1;
    }
    // sides
    if (board[row][col-1] && !board[row][col-1].mine && !board[row][col-1].visible) {
      surrounding.push([row, col-1]);
    } else if (board[row][col-1] && board[row][col-1].mine) {
      space.value += 1;
    }
    if (board[row][col+1] && !board[row][col+1].mine && !board[row][col+1].visible) {
      surrounding.push([row, col+1]);
    } else if (board[row][col+1] && board[row][col+1].mine) {
      space.value += 1;
    }
    // bottom row
    if (board[row+1] && board[row+1][col-1] && !board[row+1][col-1].mine && !board[row+1][col-1].visible) {
      surrounding.push([row+1, col-1]);
    } else if (board[row+1] && board[row+1][col-1] && board[row+1][col-1].mine) {
      space.value += 1;
    }
    if (board[row+1] && board[row+1][col] && !board[row+1][col].mine && !board[row+1][col].visible) {
      surrounding.push([row+1, col]);
    } else if (board[row+1] && board[row+1][col] && board[row+1][col].mine) {
      space.value += 1;
    }
    if (board[row+1] && board[row+1][col+1] && !board[row+1][col+1].mine && !board[row+1][col+1].visible) {
      surrounding.push([row+1, col+1]);
    } else if (board[row+1] && board[row+1][col+1] && board[row+1][col+1].mine) {
      space.value += 1;
    }
    // if space has a number, reveal the number and turn ends
    if (space.value) {
      space.visible = true;
      return;
    } else if (!space.value) {
      // if space is blank, reveal the surrounding spaces until the edges of the blank patch is reached
      for (var s = 0; s < surrounding.length; s++) {
        this.reveal(board, surrounding[s][0], surrounding[s][1]);
      }
    }
  }

  // check for a win

  checkWin(board, rows = 10, cols = 10) {
    var swept = true;
    for (var r = 0; r < rows; r ++) {
      for (var c = 0; c < cols; c++) {
        if (!board[r][c].mine && !board[r][c].visible) {
          swept = false;
          return;
        }
      }
    }
    return swept;
  }

  gameEnd(status) {
    this.state.end = true;
    if (status === 'lose') {
      console.log('game over, you lose');
      this.freezeBoard(this.state.gameBoardData);
    } else if (status === 'win') {
      console.log('you win!');
      this.state.win = true;
      this.freezeBoard(this.state.gameBoardData);
    } else {
      console.log('what the heck happened');
    }
  }

  freezeBoard(board, rows=10, cols=10) {
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var space = board[r][c];
        space.visible = true;
        space.end = true;
      }
    }
    var gameBoard = this.createRows();
    this.state.gameBoard = gameBoard;
    this.setState({
      gameBoard: this.state.gameBoard
    });
  }

  restartClick () {
    var gameboard = createBoard()
    this.state.gameBoardData = gameboard;
    var gameBoard = this.createRows();
    this.state.gameBoard = gameBoard;
    this.setState({
      gameBoard: this.state.gameBoard,
      win: false,
      end: false
    });
  }



  ////

  render() {
    if (this.state.gameBoard) {
      return(
        <div>
          <div id="button">
            <Restart restartClick={this.restartClick} end={this.state.end} win={this.state.win}/>
          </div>
          <br></br>
          <div id="grid">
            <table>
              {/* <Grid gameBoard={this.state.gameBoard}/> */}
              <tbody>
                {this.state.gameBoard.map((tableRows) => {
                  return(<tr>{tableRows.map((tableCells) => {
                    return (tableCells)
                  })}</tr>);
                })}
              </tbody>
            </table>
          </div>
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