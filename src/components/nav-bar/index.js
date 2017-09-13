import React, { Component } from 'react';
import NavItem from 'components/nav-item';
import { Link } from 'react-router-dom'
import './style.css';

export default class NavBar extends Component {
  

  render() {
    return (
      <div className="nav-bar">
        <Link to="/" ><NavItem label='Home' /></Link>
        <Link to="/search" ><NavItem label='Search' /></Link>
      </div>
    );
  }
}