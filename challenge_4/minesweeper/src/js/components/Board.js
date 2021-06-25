import React, { Component } from "react";
import { connect } from "react-redux";
// import { createBoard, plantMines, clickSpace, reveal, gameOver } from '../reducers/boardFunctions.js';
import { createGame, clickSpace } from '../actions/index.js';


// temp to test board until I figure out Redux
const Board = (props) => {
  var newBoard = createBoard();
  // board needs to be set as state
  var createID = (r, c) => {
    var id = JSON.stringify(r) + ',' + JSON.stringify(c);
    return id;
  }

  var createRows = (rows=10, cols=10) => {
    var tableArrays = [];
    for (var r = 0; r < rows; r++) {
      var rowArray = [];
      for (var c = 0; c < cols; c++) {
        rowArray.push(createCell(r, c));
      }
      tableArrays.push(rowArray);
    }
    return tableArrays;
  }

  var createCell = (r, c) => {
    var id = createID(r, c)
    var onClick = () => {
      clickSpace(newBoard, r, c);
    }
    var value = newBoard[r][c].value;
    return(<td id={id} onClick={onClick}>[{value}]</td>)
  }

  var tableStuff = createRows();

  return (<div>
    <table>
      <tbody>
        {tableStuff.map((tableRows) => {
          return(<tr>{tableRows.map((tableCells) => {
            return (tableCells)
          })}</tr>);
        })}
      </tbody>
    </table>
  </div>);
}

export default Board;