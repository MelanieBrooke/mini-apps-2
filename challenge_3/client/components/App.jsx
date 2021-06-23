import React from 'react';
import Keypad from './Keypad.jsx';
import Display from './Display.jsx';
import Message from './Message.jsx';
import Button from './Button.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      frame: 1,
      bowl: 1,
      score: {
        frame1: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame2: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame3: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame4: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame5: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame6: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame7: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame8: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame9: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame10: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0},
        frame11: {bowl1: 0, bowl2: 0, bonus: 0, strikeSpare: 0}
      },
      total: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  // componentDidMount() {

  // }

  startGame() {
    for (var i = 1; i <= 11; i++) {
      var currFrame = 'frame' + JSON.stringify(i);
      this.state.score[currFrame] = {
        bowl1: 0,
        bowl2: 0,
        bonus: 0,
        strikeSpare: 0
      };
    }
    this.setState({
      frame: 1,
      bowl: 1,
      total: 0,
      score: this.state.score,
      gameOver: false
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.handleInput(Number(e.target.innerHTML));
  }

  handleInput(input) {
    var currFrame = 'frame' + JSON.stringify(this.state.frame);
    // don't add more points if the game is over
    if (this.state.gameOver === true) {
      console.log('the game ended, you\'re out of luck');
      return;
    }
    console.log('frame: ', this.state.frame);
    // first frame
    if (this.state.frame === 1) {
      this.calculateScore(currFrame, input);
    } else if (this.state.frame === 2) {
      // second frame
      var lastFrame = 'frame' + JSON.stringify(this.state.frame - 1);
      if (this.state.score[lastFrame].strikeSpare) {
        this.state.score[lastFrame].strikeSpare -= 1;
        this.state.score[lastFrame].bonus += input;
        this.state.total += input;
      }
      this.calculateScore(currFrame, input);
    } else if (this.state.frame > 2 && this.state.frame < 11) {
      // third through tenth frame
      var lastFrame = 'frame' + JSON.stringify(this.state.frame - 1);
      var oldFrame = 'frame' + JSON.stringify(this.state.frame - 2);
      if (this.state.score[oldFrame].strikeSpare) {
        this.state.score[oldFrame].strikeSpare -= 1;
        this.state.score[oldFrame].bonus += input;
        this.state.total += input;
      }
      if (this.state.score[lastFrame].strikeSpare) {
        this.state.score[lastFrame].strikeSpare -= 1;
        this.state.score[lastFrame].bonus += input;
        this.state.total += input;
      }
      this.calculateScore(currFrame, input);
    } else if (this.state.frame === 11) {
      // bonus frame
      var lastFrame = 'frame' + JSON.stringify(this.state.frame - 1);
      var oldFrame = 'frame' + JSON.stringify(this.state.frame - 2);
      if (!this.state.score[oldFrame].strikeSpare && !this.state.score[lastFrame].strikeSpare) {
        this.gameEnd();
        return;
      }
      if (this.state.score[oldFrame].strikeSpare) {
        this.state.score[oldFrame].strikeSpare -= 1;
        this.state.score[oldFrame].bonus += input;
        this.state.total += input;
      }
      if (this.state.score[lastFrame].strikeSpare) {
        this.state.score[lastFrame].strikeSpare -= 1;
        this.state.score[lastFrame].bonus += input;
        this.state.total += input;
      }
      if (this.state.bowl === 1) {
        this.state.score[currFrame].bowl1 = input;
        this.state.bowl = 2;
      } else {
        this.state.score[currFrame].bowl2 = input
        this.state.bowl = 1;
      }
    }

    this.setState({
      score: this.state.score
    });

    if (this.state.frame === 11 && !this.state.score.frame10.strikeSpare && !this.state.score.frame9.strikeSpare) {
      this.gameEnd();
      return;
    }
  }

  calculateScore(currFrame, input) {
    this.state.total += input;
    if (this.state.bowl === 1) {
      // strike
      if (input === 10) {
        this.state.score[currFrame].bowl1 = input;
        this.state.score[currFrame].strikeSpare = 2;
        this.state.frame += 1;
      } else {
        this.state.score[currFrame].bowl1 = input;
        this.state.bowl = 2;
      }
    } else {
      this.state.score[currFrame].bowl2 = input
      // spare
      if (this.state.score[currFrame].bowl1 + input === 10) {
        this.state.score[currFrame].strikeSpare = 1;
      }
      this.state.bowl = 1;
      this.state.frame += 1;
    }
  }

  gameEnd() {
    console.log('game over');
    this.state.gameOver = true;
    return;
    // freeze keypad
    // display final score
    // offer to play again and reset board
  }

  render() {
    return(
      <div>
        <h1>Bowling Scorekeeper (Single Player Version)</h1>
        <Message frame={this.state.frame} roll={this.state.bowl} gameOver={this.state.gameOver} total={this.state.total}/>
        <Keypad handleClick={this.handleClick}/>
        <br></br>
        <Button onClick={this.startGame}/>
        <br></br>
        <Display score={this.state.score} total={this.state.total}/>
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