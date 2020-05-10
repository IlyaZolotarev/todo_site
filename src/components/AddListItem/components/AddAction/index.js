import React, { useState } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { addItem } from './../../../../store/actionCreators/itemsAction';

const AddAction = ({ onClick, addItem, listID }) => {
  const handleAddCard = () => {
    if (inputValue) {
      addItem(listID, inputValue);
      onClick();
    }
  };

  const [inputValue, setInputValue] = useState('');
  return (
    <div className="add-item-block">
      <textarea
        type="text"
        placeholder="Enter a little for this card..."
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <div className="add-item-block__buttons-block">
        <button
          onClick={() => handleAddCard()}
          className="buttons-block__add-task"
        >
          Add Task
        </button>
        <button onClick={() => onClick()} className="buttons-block__close">
          Close
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  addItem,
};
export default connect('', mapDispatchToProps)(AddAction);
