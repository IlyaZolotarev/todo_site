import React, { Fragment } from 'react';
import DropDownMenu from './../../components/DropDownMenu';
import { TodoList } from './../../components/TodoList';
import { AddList } from './../../components/AddList';
import { connect } from 'react-redux';
//styles
import './styles.scss';
//DnD components
import { DragDropContext } from 'react-beautiful-dnd';

//actions
import { sort } from '../../store/actionCreators/listsAction';

const TodoBoardContainer = ({ lists, sort }) => {
  const onDragEnd = results => {
    const { destination, source, draggableId } = results;
    if (!destination) {
      return null;
    }

    sort(
      source.droppableId, // from which list
      destination.droppableId, //to which list
      source.index, // index of card in first list
      destination.index, //index of card in another list
      draggableId, // id of card
    );
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {lists.map(list => {
          return (
            <TodoList
              key={list.id}
              listID={list.id}
              listTitle={list.listTitle}
              listItems={list.listItems}
            />
          );
        })}
        <AddList />
      </DragDropContext>
      <DropDownMenu />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = {
  sort,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoBoardContainer);
