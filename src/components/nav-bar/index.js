import React, { Component } from 'react';
import NavItem from 'components/nav-item';
import './style.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <NavItem label='Home' />
        <NavItem label='Search' />
      </div>
    );
  }
}