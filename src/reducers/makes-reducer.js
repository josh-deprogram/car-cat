import * as types from 'actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_MAKES_RECEIVED:
      return [...state, ...action.data];
    default:
      return state;
  }
};