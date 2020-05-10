import { ADD_ITEM } from './../types';

export const addItem = (listID, itemTitle) => {
  return {
    type: ADD_ITEM,
    payload: { listID, itemTitle },
  };
};
