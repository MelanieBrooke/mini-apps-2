import React from 'react';
import Keypad from './Keypad.jsx';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 1,
      bowl: 1,
      bonus: 0,
      score: {
        frame1: {bowl1: 0, bowl2: 0},
        frame2: {bowl1: 0, bowl2: 0},
        frame3: {bowl1: 0, bowl2: 0},
        frame4: {bowl1: 0, bowl2: 0},
        frame5: {bowl1: 0, bowl2: 0},
        frame6: {bowl1: 0, bowl2: 0},
        frame7: {bowl1: 0, bowl2: 0},
        frame8: {bowl1: 0, bowl2: 0},
        frame9: {bowl1: 0, bowl2: 0},
        frame10: {bowl1: 0, bowl2: 0}
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  startGame() {
    this.setState({
      frame: 1,
      bowl: 1,
      bonus: 0
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.handleInput(Number(e.target.innerHTML));
  }

  handleInput(score) {
    console.log(score);
    if (this.state.bowl === 1) {
      console.log('first bowl was', score);
      if (score === 10) {
        console.log('strike!');
        this.state.bonus += 1;
        this.state.frame += 1;
      } else {
        this.state.bowl = 2;
      }
    } else {
      console.log('second bowl was', score);
      this.state.bowl = 1;
      this.state.frame += 1;
      console.log('frame', this.state.frame);
    }
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
        <Keypad handleClick={this.handleClick}/>
        <br></br>
        <br></br>
        <Display score={this.state.score}/>
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