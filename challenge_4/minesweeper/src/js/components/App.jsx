import React from "react";
// import List from "./List";
// import Form from "./Form";
// import { createBoard, plantMines, clickSpace, reveal, gameOver } from '../reducers/boardFunctions.js';
import Board from './Board.jsx';


// const App = () => (
//   <>
//     <div>
//       Hello World
//       <Board />
//     </div>
//   </>
// );

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(<div id="main">
      <div id="header"><h2>Minesweeper</h2></div>
      <Board />
    </div>)
  }

}

export default App;