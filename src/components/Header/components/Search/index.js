import React from 'react';
import './styles.scss';
import searchIcon from './../../../../assets/icons/search.svg';

export const Search = () => {
  return (
    <div className="search-block">
      <input
        className="search-block__search-input"
        type="text"
        placeholder="Search"
      ></input>
      <img src={searchIcon}></img>
    </div>
  );
};
