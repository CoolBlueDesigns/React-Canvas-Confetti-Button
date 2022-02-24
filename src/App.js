import './App.css';
import CanvasConfetti from "canvas-confetti";
import React from 'react';
import Confetti from 'react-confetti';
import confetti from 'canvas-confetti';


const duration = 30 * 1000;
const end = Date.now() + duration;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.frame = this.frame.bind(this)
  };


 frame = () => {
  confetti({
    particleCount: 125,
    spread: 100,
  });
  if (Date.now() < end) {
    requestAnimationFrame();
  }
};

  render() {
    return(
      <div className='canvas-container'>
        <h3>React Canvas Confetti Button</h3>
        <button className="button" onClick={this.frame}>Confetti!</button>
      </div>
      )
  }
}

export default App