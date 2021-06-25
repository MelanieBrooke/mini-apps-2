import React, { Component } from "react";
import { connect } from "react-redux";
import { createBoard, plantMines, clickSpace, reveal, gameOver } from '../reducers/boardFunctions.js';


// temp to test board until I figure out Redux
const Board = (props) => {
  var newBoard = createBoard();
  // board needs to be set as state
  var createID = (r, c) => {
    var id = JSON.stringify(r) + ',' + JSON.stringify(c);
    return id;
  }

  // hard coding board for now, can update to be flexible with time later after I learn redux
  var createRows = () => {
    var tableArrays = [];
    for (var r = 0; r < 10; r++) {
      var rowArray = [];
      for (var c = 0; c < 10; c++) {
        rowArray.push(createCell(r, c));
      }
      tableArrays.push(rowArray);
    }
    return tableArrays;
  }

  var createCell = (r, c) => {
    var id = createID(r, c)
    return(<td id={id}>[{id}]</td>)
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