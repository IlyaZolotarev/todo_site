import { ADD_LIST, DRAG_HAPPEND } from './../types';

export const addList = listTitle => {
  return {
    type: ADD_LIST,
    payload: { listTitle },
  };
};

export const sort = (
  droppableIdStart, // from which list id
  droppableIdEnd, //to which list id
  droppableIndexStart, // index of card in first list
  droppableIndexEnd, //index of card in another list
  draggableId, // id of card
) => {
  return {
    type: DRAG_HAPPEND,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
