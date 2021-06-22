import React from 'react';
import buttons from '../buttons.modules.css';

// numbers to click on to enter score
// remember to gray out numbers if it's not possible to score that high on a second bowl
// lay out numbers in a row with a table? (color code good to bad for fun if time allows haha)

const Keypad = (props) => {
  return (
    <div>
      <table class={buttons.table}>
        <tbody>
          <tr>
            <td id="0" onClick={props.handleClick}>0</td>
            <td id="1" onClick={props.handleClick}>1</td>
            <td id="2" onClick={props.handleClick}>2</td>
            <td id="3" onClick={props.handleClick}>3</td>
            <td id="4" onClick={props.handleClick}>4</td>
            <td id="5" onClick={props.handleClick}>5</td>
            <td id="6" onClick={props.handleClick}>6</td>
            <td id="7" onClick={props.handleClick}>7</td>
            <td id="8" onClick={props.handleClick}>8</td>
            <td id="9" onClick={props.handleClick}>9</td>
            <td id="10" onClick={props.handleClick}>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Keypad;