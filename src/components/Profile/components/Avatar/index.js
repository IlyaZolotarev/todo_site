import React from 'react';
import './styles.scss';
import avatar from './../../../../assets/images/avatars/avatar.jpg';

export const Avatar = () => {
  return (
    <div className="avatar-wrapper">
      <img src={avatar} alt="avatar"></img>
    </div>
  );
};
