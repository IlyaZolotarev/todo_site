import { IS_OPEN } from './../types';

const initState = [{ status: false }];

export const isOpenReducer = (state = initState, action) => {
  switch (action.type) {
    case IS_OPEN:
      const newState = {
        status: action.payload.status,
      };
      return newState;

    default:
      return state;
  }
};
