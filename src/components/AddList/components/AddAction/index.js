import React, { useState } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { addList } from './../../../../store/actionCreators/listsAction';

export const AddAction = ({ onClick, addList }) => {
  const handleAddList = () => {
    if (inputValue) {
      addList(inputValue);
      onClick();
    }
  };

  const [inputValue, setInputValue] = useState('');
  return (
    <div className="add-list-block">
      <input
        type="text"
        placeholder="List name"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <div className="add-list-block__buttons-block">
        <button
          onClick={() => handleAddList()}
          className="buttons-block__add-list"
        >
          Add list
        </button>
        <button onClick={() => onClick()} className="buttons-block__close">
          Close
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addList,
};
export default connect('', mapDispatchToProps)(AddAction);
