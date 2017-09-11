import React, { Component } from 'react';
import './style.css';

export default class NavItem extends Component {
  render() {
    return (
      <div className="nav-item">
        { this.props.label }
      </div>
    );
  }
}