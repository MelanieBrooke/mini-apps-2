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
    return(<div>
      Hello World
      <Board />
    </div>)
  }

}

export default App;