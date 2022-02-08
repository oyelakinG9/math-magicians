import React, { Component } from 'react';
import Calculator from './components/calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
