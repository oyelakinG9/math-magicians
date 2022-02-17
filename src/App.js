import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
            <h1>Math Magicians</h1>
            <nav className="nav">
              <ul className="navBar">
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link border">
                  <Link to="calculator">Calculator</Link>
                </li>
                <li className="nav-link">
                  <Link to="quote">Quote</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
