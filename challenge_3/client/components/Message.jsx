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
    if (props.total === 42) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>Well... at least you hit the universe's favorite number, even if no one will be asking you to join their bowling league anytime soon.</h4>
        </div>
      )
    } else if (props.total < 10) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>And why did you need a scoreboard to add these numbers in your head? Are you as bad at math as you are at bowling?</h4>
        </div>
      )
    } else if (props.total < 100) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>....finally. Hey, you tried, right? You had fun? It's the experience that counts? Something like that.</h4>
        </div>
      )
    } else if (props.total < 150) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>Triple digits, that's something, right?</h4>
        </div>
      )
    } else if (props.total < 200) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>Got some nice rolls in there, huh? Not bad.</h4>
        </div>
      )
    } else if (props.total < 250) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>Kinda impressive there, kiddo. I'll admit I'm jealous of your skills.</h4>
        </div>
      )
    } else if (props.total < 290) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>Whoo boy, that's some nice rolling!</h4>
        </div>
      )
    } else if (props.total < 300) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>Almost perfect! ...So close to perfect that I bet it hurts a little, huh?</h4>
        </div>
      )
    } else if (props.total === 300) {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>PERFECT GAME! You should be so proud of yourself! But now... what's next? You've acheived this, and now what? What's left?</h4>
        </div>
      )
    } else {
      return (
        <div>
          <h3>Game Over!</h3>
          <h4>I'm not sure how you got whatever score led you to this screen, but you shouldn't have.</h4>
        </div>
      )
    }
  } else {
    return (
      <h3>Error with the display message</h3>
    )
  }
}

export default Message;