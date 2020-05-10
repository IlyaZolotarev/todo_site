import React from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { isOpenHandler } from './../../store/actionCreators/isOpenAction';
import onClickOutside from 'react-onclickoutside';
import Profile from './../Profile';
import { ProfileSettings } from './../Profile/components/ProfileSettings';

const DropDownMenu = ({ isOpen, isOpenHandler }) => {
  DropDownMenu.handleClickOutside = () => isOpenHandler(false);
  return isOpen.status ? (
    <div className="dropdown-wrapper">
      <Profile marginBottom />
      <ProfileSettings />
    </div>
  ) : null;
};
const mapDispatchToProps = state => ({
  isOpenHandler,
});

const mapStateToProps = state => ({
  isOpen: state.isOpen,
});

const clickOutsideConfig = {
  handleClickOutside: () => DropDownMenu.handleClickOutside,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  DropDownMenu,
  onClickOutside(DropDownMenu, clickOutsideConfig),
);
