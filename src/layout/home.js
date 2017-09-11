import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from 'assets/images/logo.svg';
import 'assets/style/app.css';

class Home extends Component {

  componentDidUpdate() {
    console.log('Got the state.. ', this.props);
  }

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

function mapStateToProps(state, props) {
  return {
    carOfWeek: state.carOfWeek
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     carOfWeek: bindActionCreators(sectionActions, dispatch)
//   }
// }

export default connect(mapStateToProps)(Home);