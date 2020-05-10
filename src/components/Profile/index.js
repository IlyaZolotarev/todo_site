import React from 'react';
import className from 'classnames';
import './styles.scss';
import { Avatar } from './components/Avatar';
import { UserName } from './components/UserName';
import { isOpenHandler } from './../../store/actionCreators/isOpenAction';
import { connect } from 'react-redux';

const Profile = ({ isOpenHandler, isOpen, marginBottom }) => {
  const modify = className({ ' profile--margin-bottom': marginBottom });

  const changeHandler = () => {
    isOpenHandler(!isOpen.status);
  };

  return (
    <div className={`profile ${modify}`} onClick={() => changeHandler()}>
      <UserName />
      <Avatar />
    </div>
  );
};
const mapDispatchToProps = {
  isOpenHandler,
};
const isOpenStateProps = state => ({
  isOpen: state.isOpen,
});

export default connect(isOpenStateProps, mapDispatchToProps)(Profile);
