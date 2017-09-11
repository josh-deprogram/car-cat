import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
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