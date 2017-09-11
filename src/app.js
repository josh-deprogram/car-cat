import React, { Component } from 'react';
import Routes from './routes';
import NavBar from 'components/nav-bar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
        <div className='footer'>Car Catalogue SPA</div>
      </div>
    );
  }
}