import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_SECTION:
      return [...state, Object.assign({}, action.section)];
    default:
      return state;
  }
};