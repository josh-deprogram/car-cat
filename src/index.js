import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import './assets/style/index.css';

const initialState = {
  // route:'home',
}
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

// Fetch inital data from API
store.dispatch({type: 'GET_MAKES'});
store.dispatch({type: 'GET_MODELS'});
