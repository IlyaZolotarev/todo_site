import React from 'react';
import './styles.scss';
import { ContentContainer } from './../../components/ContentContainer';
import { Logo } from './components/Logo';
import { BoardList } from './components/BoardList';
import { Search } from './components/Search';
import Profile from '../../components/Profile';
import { Humburger } from './components/Humburger';

export const Header = () => {
  return (
    <section className="header">
      <ContentContainer
        display="flex"
        alignItems="center"
        minHeight="120px"
        justifyContent="space-between"
      >
        <div className="header__left-block">
          <Logo />
          <BoardList />
        </div>
        <div className="header__right-block">
          <Search />
          <Profile />
          <Humburger />
        </div>
      </ContentContainer>
    </section>
  );
};
