import React from 'react';
import './styles.scss';
import Collapsible from 'react-collapsible';
import { TodoListTitle } from './components/TodoListTitle';
import { TodoItem } from './components/TodoItem';
import { Droppable } from 'react-beautiful-dnd';
import AddListItem from './../../components/AddListItem';

export const TodoList = ({ listID, listTitle, listItems }) => {
  const options = {
    trigger: <TodoListTitle listTitle={listTitle} />,
    containerElementProps: { listID },
    transitionTime: 200,
    open: true,
  };

  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="todo-list"
        >
          <Collapsible {...options}>
            {listItems.length ? (
              listItems.map((listItem, index) => {
                return (
                  <TodoItem
                    key={listItem.id}
                    listItem={listItem.id}
                    itemTitle={listItem.itemTitle}
                    index={index}
                  />
                );
              })
            ) : (
              <p className="empty-message">List is empty</p>
            )}
            {provided.placeholder}
          </Collapsible>
          <AddListItem listID={listID} />
        </div>
      )}
    </Droppable>
  );
};
