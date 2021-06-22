import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 0,
      bowl: 1,
      bonus: 0
    };
  }

  componentDidMount() {

  }

  handleInput() {
    // for when bowl scores are entered
    // determine if it's the first or second bowl of the frame
    // call calculate score
    // update the frame and bowl accordingly
    // if game over, call gameEnd
  }

  calculateScore() {
    //
  }

  gameEnd() {
    // freeze keypad
    // display final score
    // offer to play again and reset board
  }

  render() {
    return(
      <div>
        Hello World
      </div>
    )
  }

}

export default App;



// create display for ten frames plus bonus
// display needs score for each bowl plus the total for that frame and the current overall total score
// track the frame, first or second bowl, and if there is a bonus for a spare or a strike
// track points per bowl and make sure someone can't click more points than 10 total per frame
// Have a reset button to start a new game
// UI for adding the counter and showing the scores will be separate components
// click handlers themselves live in App
// functions to calculate can be their own functions? Or maybe they live in App