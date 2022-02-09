import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent = (e) => {
    e.preventDefault();
    this.setState((prev) => calculate(prev, e.target.name));
  }

  render() {
    const { total, next, operation } = this.state;
    const showTotal = () => {
      if (total === 0 && next === null) {
        return 0;
      }

      if (total !== 0 && total !== null) {
        return total;
      }
      return '';
    };
    return (
      <>
        <div className="calculator-container">
          <input type="text" id="result" value={(showTotal()) + (operation || '') + (next || '')} disable />
          <div className="keypad">
            <button onClick={this.handleEvent} type="button" name="AC">AC</button>
            <button onClick={this.handleEvent} type="button" name="+/-">+/-</button>
            <button onClick={this.handleEvent} type="button" name="%">%</button>
            <button onClick={this.handleEvent} type="button" name="÷" className="btn-warning">&divide;</button>
            <button onClick={this.handleEvent} type="button" name="7">7</button>
            <button onClick={this.handleEvent} type="button" name="8">8</button>
            <button onClick={this.handleEvent} type="button" name="9">9</button>
            <button onClick={this.handleEvent} type="button" name="x" className="btn-warning">x</button>
            <button onClick={this.handleEvent} type="button" name="6">6</button>
            <button onClick={this.handleEvent} type="button" name="5">5</button>
            <button onClick={this.handleEvent} type="button" name="4">4</button>
            <button onClick={this.handleEvent} type="button" name="-" className="btn-warning">-</button>
            <button onClick={this.handleEvent} type="button" name="1">1</button>
            <button onClick={this.handleEvent} type="button" name="2">2</button>
            <button onClick={this.handleEvent} type="button" name="3">3</button>
            <button onClick={this.handleEvent} type="button" name="+" className="btn-warning">+</button>
            <button onClick={this.handleEvent} type="button" name=".">.</button>
            <button onClick={this.handleEvent} type="button" name="=">=</button>
            <button onClick={this.handleEvent} type="button" name="0" id="zero">0</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
