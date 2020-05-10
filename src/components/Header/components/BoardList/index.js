import React from 'react';
import './styles.scss';

export const BoardList = () => {
  return (
    <div className="board-list">
      <span>Board:</span>
      <select name="nubexSelect" size="1">
        <option>YouTube Videos</option>
        <option>Diego da Silva Costa</option>
        <option>Alfred Marshall</option>
      </select>
    </div>
  );
};
