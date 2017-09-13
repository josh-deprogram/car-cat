import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from 'components/nav-bar';
import 'assets/style/app.css';

class Detail extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h2>Car Detail</h2>
        </div>
        <p className="App-intro">Model details here</p>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    carOfWeek: state.carOfWeek,
    models: state.models,
    makes: state.makes,
  };
}

export default connect(mapStateToProps)(Detail);