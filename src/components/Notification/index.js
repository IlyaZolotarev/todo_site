import React from 'react';
import './styles.scss';
import notificationSvg from './../../assets/icons/notification.svg';

export const Notification = () => {
  return (
    <div className="notification-wrapper">
      <img src={notificationSvg}></img>
    </div>
  );
};
