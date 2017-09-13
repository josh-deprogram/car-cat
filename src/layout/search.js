import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from 'components/nav-bar';
import 'assets/style/search.css';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      models: [],
      make: '',
      model: '',
      modelId: '',
      chosen: false
    };

    this.handleMakeChange = this.handleMakeChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleFromSubmit = this.handleFromSubmit.bind(this);
  }

  componentWillMount() {
    // this.props.dispatch({type: 'GET_MODELS'});
    // this.props.dispatch({type: 'GET_MAKES'});
  }

  componentDidMount() {
    console.log('Search Props', this.props);
  }

  componentWillReceiveProps(props) {
    // this.setState({makes});
    console.log('New Search Props', props);
  }

  handleFromSubmit(event) {
    event.preventDefault();
    const url = '/' + this.state.make + '/' + this.state.model + '/'+ this.state.modelId;
    alert(url);
    // Route to Detail page
    this.props.history.push(url);
  }

  handleMakeChange(event) {
    const make = event.target.value;
    let mId = 0;
    let models = [];

    // Get the Make ID
    for (let i = 0; i < this.props.makes.length; i++) {
      if(this.props.makes[i].name === make) {
        mId = this.props.makes[i].id;
      }
    }
    // Populate the Selected type Models
    for (let m = 0; m < this.props.models.length; m++) {
      if(this.props.models[m].makeId === mId) {
        models.push(this.props.models[m]);  
      }
    }

    this.setState({
      make: make,
      models: models,
      modelId: mId,
    });
  }

  handleModelChange(event) {
    this.setState({
      model: event.target.value,
      chosen: true
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-header">
          <h2>Search page</h2>
        </div>
        
        <form onSubmit={this.handleFromSubmit} className="search-form">
            
            <p>Make:</p>
            <select onChange={this.handleMakeChange} className="form-select">
              <option value="" disabled selected>Select your make</option>
              {
                this.props.makes.map((make, index) => {
                  return <option key={index} value={make.name}>{make.name}</option>
                })
              }
            </select>

            <p>Model:</p>
            <select onChange={this.handleModelChange} className="form-select">
              <option value="" disabled selected>Select your model</option>
              {
                this.state.models.map((model, index) => {
                  return <option key={index} value={model.name}>{model.name}</option>
                })
              }
            </select>

            <input type="submit" value="Submit" disabled={!this.state.chosen} className="form-submit" />
        </form>

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

export default connect(mapStateToProps)(Search);