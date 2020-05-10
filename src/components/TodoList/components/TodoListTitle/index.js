import React from 'react';
import './styles.scss';
import arrowImg from './../../../../assets/images/select-arrow.png';

export const TodoListTitle = ({ listTitle }) => {
  return (
    <div className="todo-list-title">
      <p>{listTitle}</p>
      <img src={arrowImg}></img>
    </div>
  );
};
