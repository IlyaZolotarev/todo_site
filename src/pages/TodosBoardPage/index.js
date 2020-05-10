import React from 'react';
import './styles.scss';
import { ContentContainer } from '../../components/ContentContainer';

import TodoBoardContainer from './../../containers/TodosBoardContainer';

export const TodosBoardPage = () => {
  return (
    <section className="todo">
      <ContentContainer
        padding="25px 0"
        display="flex"
        flex="1"
        minHeight="100%"
        alignItems="flex-start"
      >
        <TodoBoardContainer />
      </ContentContainer>
    </section>
  );
};
