import { IS_OPEN } from './../types';

export const isOpenHandler = status => {
  return {
    type: IS_OPEN,
    payload: { status },
  };
};
