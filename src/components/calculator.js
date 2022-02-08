import './calculator.css';
import React, { Component } from 'react';

class Calculator extends Component {
  // state = {  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <div className="calculator-container">
          <input type="text" />
          <div className="keypad">
            <button type="button">Ac</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="btn-warning">&divide;</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="btn-warning">x</button>
            <button type="button">6</button>
            <button type="button">5</button>
            <button type="button">4</button>
            <button type="button" className="btn-warning">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="btn-warning">+</button>
            <button type="button">.</button>
            <button type="button">=</button>
            <button type="button" id="zero">0</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
