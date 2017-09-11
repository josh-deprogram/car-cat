import sections from './sections-reducer';
import apiData from './request-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  sections,
  apiData
});

export default rootReducer;