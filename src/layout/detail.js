import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from 'components/nav-bar';
import 'assets/style/app.css';

class Detail extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Grab Car details from the url.
    // Alternative to populate the Redux store, 
    // window values would make avalible on none search route though
    const url = window.location.href.split('/');
    this.make = url[url.length-3];
    this.model = url[url.length-2];
    this.id = parseInt(url[url.length-1]);
  }

  componentDidMount() {
    if(this.props.models.length === 0) {
      this.props.dispatch({type: 'GET_MODELS'});
      this.props.dispatch({type: 'GET_MAKES'});
    }
  }

  render() {
    let imageUrl = '';
    let model = '';
    let price = 0;

    // Get the car details.
    for (let i = 0; i < this.props.models.length; i++) {
      if(this.props.models[i].id === this.id) {
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
          <img src={'http://www.pngall.com/wp-content/uploads/2016/04/Car-Wheel-Free-Download-PNG.png'} className="App-logo" alt="wheel" />
          <h2>The Car Details</h2>
        </div>
        <div className="car-details">
          <p><img width="auto" height="200px" src={imageUrl} alt='' /></p>
          <p><strong>make:</strong> {this.make}</p>
          <p><strong>model:</strong>  {model}</p>
          <p><strong>price:</strong>  ${price}</p>
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