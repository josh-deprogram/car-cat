import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from 'components/nav-bar';
import logo from 'assets/images/logo.svg';
import 'assets/style/app.css';

class Home extends Component {

  componentWillMount() {
    this.props.dispatch({type: 'GET_CAR_OF_WEEK'});
  }

  componentDidUpdate() {
    console.log('Got the state.. ', this.props);
  }

  showCarOfTheWeek(){
    const {carOfWeek, models, makes} = this.props;
    let carDetail = {};
    let carMake = '';
    
    // Get carDetail
    for (let i = 0; i < models.length; i++) {
      if(carOfWeek[0].modelId) {
        carDetail = models[i];
      }
    }

    // Get carMake
    for (let m = 0; m < makes.length; m++) {
      if(carDetail.makeId) {
        carMake = makes[m].name;
      }
    }

    return (<div className='car-promo'>
        <h1>Car Of The Week</h1>
        {/* <p><img src={carDetail.imageUrl} alt='' /></p> // IMAGES BROKEN URLS */}
        <p>make: {carMake}</p>
        <p>model: {carDetail.name}</p>
        <p>review: {carOfWeek[0].review}</p>
        <p>price: ${carDetail.price}</p>
      </div>
    );
  }

  render() {
    const {carOfWeek} = this.props;
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Car Catalogue</h2>
        </div>
        {carOfWeek[0] ? this.showCarOfTheWeek() : null}
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

export default connect(mapStateToProps)(Home);