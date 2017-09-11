import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/style/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Car Catalogue</h2>
        </div>
        <p className="App-intro">lkjlkjlkj</p>
      </div>
    );
  }
}

export default App;
