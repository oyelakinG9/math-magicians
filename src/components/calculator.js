import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({ total: 0, next: null, operation: null });
  const { next, total, operation } = calculation;

  const handleEvent = (e) => {
    e.preventDefault();
    setCalculation((prev) => calculate(prev, e.target.name));
  };
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
      <h3>Let&apos;s do some math</h3>
      <div className="calculator-container">
        <input type="text" id="result" value={(showTotal()) + (operation || '') + (next || '')} readOnly />
        <div className="keypad">
          <button onClick={handleEvent} type="button" name="AC">AC</button>
          <button onClick={handleEvent} type="button" name="+/-">+/-</button>
          <button onClick={handleEvent} type="button" name="%">%</button>
          <button onClick={handleEvent} type="button" name="÷" className="btn-warning">&divide;</button>
          <button onClick={handleEvent} type="button" name="7">7</button>
          <button onClick={handleEvent} type="button" name="8">8</button>
          <button onClick={handleEvent} type="button" name="9">9</button>
          <button onClick={handleEvent} type="button" name="x" className="btn-warning">x</button>
          <button onClick={handleEvent} type="button" name="6">6</button>
          <button onClick={handleEvent} type="button" name="5">5</button>
          <button onClick={handleEvent} type="button" name="4">4</button>
          <button onClick={handleEvent} type="button" name="-" className="btn-warning">-</button>
          <button onClick={handleEvent} type="button" name="1">1</button>
          <button onClick={handleEvent} type="button" name="2">2</button>
          <button onClick={handleEvent} type="button" name="3">3</button>
          <button onClick={handleEvent} type="button" name="+" className="btn-warning">+</button>
          <button onClick={handleEvent} type="button" name=".">.</button>
          <button onClick={handleEvent} type="button" name="=">=</button>
          <button onClick={handleEvent} type="button" name="0" id="zero">0</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
