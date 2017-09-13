import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from 'components/nav-bar';
import 'assets/style/app.css';

class Detail extends Component {

  componentWillMount() {
    // Grab Car details from the url.
    // Alternative to populate the Redux store, 
    // window values would make avalible on none search route though
    const url = window.location.href.split('/');
    this.make = url[url.length-3];
    this.model = url[url.length-2];
    this.id = parseInt(url[url.length-1]);
  }

  render() {
    let imageUrl = '';
    let model = '';
    let price = 0;

    // Get the car details.
    for (let i = 0; i < this.props.models.length; i++) {
      console.log('check ', this.props.models[i]) 
      if(this.props.models[i].id === this.id) {
        console.log('Set___ ', this.props.models[i]) 
        imageUrl = this.props.models[i].imageUrl;
        price = this.props.models[i].price;
        model = this.props.models[i].name;
      }
    }

    console.log('....' , this.make, this.model, this.id, this.props)
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h2>Car Detail</h2>
        </div>
        <div className="car-details">
          <p><img width="auto" height="200px" src={imageUrl} alt='' /></p>
          <p>make: {this.make}</p>
          <p>model: {model}</p>
          <p>price: ${price}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    models: state.models,
    makes: state.makes,
  };
}

export default connect(mapStateToProps)(Detail);