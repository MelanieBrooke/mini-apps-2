import React from 'react';
import Keypad from './Keypad.jsx';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      frame: 1,
      bowl: 1,
      bonus: 0,
      score: {
        frame1: {bowl1: 0, bowl2: 0, bonus: 0},
        frame2: {bowl1: 0, bowl2: 0, bonus: 0},
        frame3: {bowl1: 0, bowl2: 0, bonus: 0},
        frame4: {bowl1: 0, bowl2: 0, bonus: 0},
        frame5: {bowl1: 0, bowl2: 0, bonus: 0},
        frame6: {bowl1: 0, bowl2: 0, bonus: 0},
        frame7: {bowl1: 0, bowl2: 0, bonus: 0},
        frame8: {bowl1: 0, bowl2: 0, bonus: 0},
        frame9: {bowl1: 0, bowl2: 0, bonus: 0},
        frame10: {bowl1: 0, bowl2: 0, bonus: 0},
        frame11: {bowl1: 0, bowl2: 0, bonus: 0}
      },
      total: 0,
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

  handleInput(input) {
    if (this.state.gameOver === true) {
      console.log('the game already ended!');
      return;
    }
    console.log('frame: ', this.state.frame)
    if (this.state.frame > 10 && !this.state.bonus) {
      console.log('game end');
      return;
    }
    if (this.state.frame === 11 && this.state.bonus) {
      this.bonusFrame(input);
      return;
    }
    this.state.total += input;
    var keepScore = 'frame' + JSON.stringify(this.state.frame);
    if (this.state.bowl === 1) {
      console.log('first bowl was', input);
      if (input === 10) {
        console.log('strike!');
        this.state.bonus += 2;
        this.state.frame += 1;
        this.state.score[keepScore].bowl1 = input;
      } else {
        this.state.bowl = 2;
        this.state.score[keepScore].bowl1 = input;
      }
    } else {
      console.log('second bowl was', input);
      this.state.bowl = 1;
      this.state.frame += 1;
      this.state.score[keepScore].bowl2 = input;
      if (this.state.score[keepScore].bowl1 + this.state.score[keepScore].bowl2 === 10) {
        console.log('spare!');
        this.state.bonus += 1;
      }
    }
    console.log(this.state.score[keepScore]);
    this.setState({
      frame: this.state.frame
    });
  }

  calculateScore(score, bowl) {
    //
  }

  bonusFrame(input) {
    if (this.state.bowl === 1) {
      this.state.score.frame11.bowl1 = input;
      this.state.bowl = 2;
      this.state.bonus -= 1;
      this.state.total += input;
    } else {
      this.state.score.frame11.bowl2 = input;
      this.state.total += input;
      this.gameEnd();
    }
    this.setState({
      score: this.state.score
    });
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
        <Keypad handleClick={this.handleClick}/>
        <br></br>
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