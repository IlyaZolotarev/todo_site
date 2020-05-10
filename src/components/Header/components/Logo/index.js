import React from 'react';
import logoImg from './../../../../assets/images/trello-logo.png';
import './styles.scss';

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logoImg} alt="logo"></img>
    </div>
  );
};
