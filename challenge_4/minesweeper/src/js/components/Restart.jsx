import React from 'react';

const Restart = (props) => {
  if (props.end === false) {
    return(<button onClick={props.restartClick}><img src="smile.jpg"></img></button>)
  } else if (props.end === true && props.win === true) {
    return(<button onClick={props.restartClick}><img src="sunglasses.jpeg"></img></button>)
  } else if (props.end === true && props.win === false) {
    return(<button onClick={props.restartClick}><img src="dead.jpg"></img></button>)
  }
}

export default Restart;