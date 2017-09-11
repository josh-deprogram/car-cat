import makes from './makes-reducer';
import models from './models-reducer';
import carOfWeek from './car-of-week-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  makes,
  models,
  carOfWeek
});

export default rootReducer;