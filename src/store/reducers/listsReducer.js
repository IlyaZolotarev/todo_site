import { ADD_ITEM, ADD_LIST, DRAG_HAPPEND } from './../types';

const initialState = [
  {
    id: `list-${0}`,
    listTitle: 'To Do',
    listItems: [
      {
        id: `list-${0}-itemId-${0}`,
        itemTitle: 'Фикс страницы профиля. Аватар и никнейм.',
      },
      {
        id: `list-${0}-itemId-${1}`,
        itemTitle: 'Добавить пагинацию в списке задач.',
      },
      {
        id: `list-${0}-itemId-${2}`,
        itemTitle: 'Валидность эмейла на странице авторизации',
      },
    ],
  },
  {
    id: `list-${1}`,
    listTitle: 'In process',
    listItems: [{ id: `list-${1}-itemId-${3}`, itemTitle: 'Купить хлеб' }],
  },
  {
    id: `list-${2}`,
    listTitle: 'Done',
    listItems: [],
  },
];

let listID = initialState.length;
let itemID = initialState[0].listItems.length;

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newLIst = {
        id: `list-${listID}`,
        listTitle: action.payload.listTitle,
        listItems: [],
      };
      listID += 1;
      return [...state, newLIst];
    case ADD_ITEM: {
      const newItem = {
        id: `${action.payload.listID}-${itemID}`,
        itemTitle: action.payload.itemTitle,
      };
      itemID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            listItems: [newItem, ...list.listItems],
          };
        } else {
          return list;
        }
      });
      return newState;
    }

    case DRAG_HAPPEND:
      const {
        droppableIdStart, // from which list id
        droppableIdEnd, //to which list id
        droppableIndexStart, // index of card in first list
        droppableIndexEnd, //index of card in another list
        draggableId, // id of card
      } = action.payload;

      const newState = [...state];

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const listItem = list.listItems.splice(droppableIndexStart, 1); // cut out the element from the array that we move
        list.listItems.splice(droppableIndexEnd, 0, ...listItem); // insert the element in the array that we move
      } else {
        const startList = state.find(list => droppableIdStart === list.id);
        const endList = state.find(list => droppableIdEnd === list.id);

        const listItem = startList.listItems.splice(droppableIndexStart, 1); // cut out the element from the array that we move
        endList.listItems.splice(droppableIndexEnd, 0, ...listItem); // insert the element in the array that we move
      }
      return newState;
    default:
      return state;
  }
};
