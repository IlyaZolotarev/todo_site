import React from 'react';
import { Header } from './../../components/Header';
import { TodosBoardPage } from './../../pages/TodosBoardPage';
import './styles.scss';

export const Routes = () => {
  return (
    <div className="app">
      <Header />
      <TodosBoardPage />
    </div>
  );
};
