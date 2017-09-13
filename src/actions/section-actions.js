import * as types from './action-types';

export const setDetail = (detail) => {
  return {
    type: types.SET_DETAIL_DATA,
    detail
  };
}

