import React from 'react';
import HeaderContent from './HeaderContent/HeaderContent';
import HeaderSlider from './HeaderSlider/HeaderSlider';
import './header.css';

const Header = () => {
  return (
    <div className="Header">
      <HeaderContent />
      <HeaderSlider />
    </div>
  );
};

export default Header;
