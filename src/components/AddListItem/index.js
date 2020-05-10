import React, { useState } from 'react';
import './styles.scss';
import AddAction from './components/AddAction';

const AddListItem = ({ listID, itemTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeHandle = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <AddAction
      listID={listID}
      itemTitle={itemTitle}
      onClick={() => changeHandle()}
    />
  ) : (
    <button onClick={() => changeHandle()}>New Task</button>
  );
};

export default AddListItem;
