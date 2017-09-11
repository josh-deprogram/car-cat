import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_DATA_RECEIVED:
      return [...state, Object.assign({}, action.data[0])];
    default:
      return state;
  }
};