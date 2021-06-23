import React from 'react';

const Message = (props) => {
  if (props.frame < 11) {
    return (
        <h3>How many pins did you knock down for Frame {props.frame}, Roll {props.roll}?</h3>
    )
  } else if (props.frame === 11 && !props.gameOver) {
    return (
      <h3>You're doing well, roll for your bonus!</h3>
    )
  } else if (props.gameOver) {
    return (
      <h3>Game Over!</h3>
    )
  } else {
    return (
      <h3>Error with the display message</h3>
    )
  }
}

export default Message;