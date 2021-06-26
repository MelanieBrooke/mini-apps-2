import React, { Component } from "react";

const Grid = (props) => {
  return(
    <tbody>
    {props.gameBoard.map((tableRows) => {
      return(<tr>{tableRows.map((tableCells) => {
        return (tableCells)
      })}</tr>);
    })}
  </tbody>
  )
}

export default Grid;