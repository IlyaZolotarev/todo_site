import React from 'react';
import './styles.scss';
import { TodoItemTitle } from './TodoItemTitle';
import { Draggable } from 'react-beautiful-dnd';

export const TodoItem = ({ itemTitle, listItem, index }) => {
  return (
    <Draggable draggableId={String(listItem)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="todo-item"
        >
          <TodoItemTitle itemTitle={itemTitle} />
        </div>
      )}
    </Draggable>
  );
};
