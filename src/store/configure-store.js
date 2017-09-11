import rootReducer from 'reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import dataService from 'services/data-service';

export default (initialState) => {
  return createStore(rootReducer, initialState, compose(applyMiddleware(dataService), window.devToolsExtension
	? window.devToolsExtension() : f => f));
};