import * as types from 'actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_CAR_OF_WEEK_RECEIVED:
      return [...state, Object.assign({}, action.data)];
    default:
      return state;
  }
};