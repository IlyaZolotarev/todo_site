import React, { useState } from 'react';
import './styles.scss';
import AddAction from './components/AddAction';

export const AddList = () => {
  const [isOpen, setIsActive] = useState(false);

  const isActiveHandle = () => {
    setIsActive(!isOpen);
  };

  return isOpen ? (
    <AddAction onClick={() => isActiveHandle()} />
  ) : (
    <button className="add-list" onClick={() => isActiveHandle()}>
      Add another List
    </button>
  );
};
