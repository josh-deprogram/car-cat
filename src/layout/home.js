import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from 'components/nav-bar';
import logo from 'assets/images/logo.svg';
import 'assets/style/app.css';

class Home extends Component {

  componentWillMount() {
    this.props.dispatch({type: 'GET_CAR_OF_WEEK'});
    // this.props.dispatch({type: 'GET_MODELS'});
    // this.props.dispatch({type: 'GET_MAKES'});
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
        <div className='inner'>
          <h1>Car Of The Week</h1>
          <p><img  width='350px' src='https://media.giphy.com/media/JHsos369mkc0M/giphy.gif' /></p>
          {/* <p><img src={carDetail.imageUrl} alt='' /></p> // IMAGES BROKEN URLS */}
          <p><strong>make:</strong> {carMake}</p>
          <p><strong>model:</strong> {carDetail.name}</p>
          <p><strong>review:</strong> {carOfWeek[0].review}</p>
          <p><strong>price:</strong> ${carDetail.price}</p>
        </div>
      </div>
    );
  }

  render() {
    const {carOfWeek} = this.props;
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <img src={'http://www.pngall.com/wp-content/uploads/2016/04/Car-Wheel-Free-Download-PNG.png'} className="App-logo" alt="wheel" />
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