import * as types from './action-types';

export const addSection = (section) => {
  return {
    type: types.ADD_SECTION,
    section
  };
}

