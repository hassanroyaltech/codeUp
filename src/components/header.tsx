import React from 'react';
import Icon from './icon';
import Navigation from './navigation';
import logo from'../assets/images/Logo.svg';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="left-column">
          <button className="no-bg no-br btn">
            <Icon color="#929292" size={24} icon="menu" />
          </button>
          <div className="logoContainer">
            <img src={logo} alt="logo" />
          </div>
          <Navigation />
        </div>
        <div className="right-column">
          <button className="no-bg no-br btn">
            <Icon color="#929292" size={24} icon="search" />
          </button>
          <button className="no-bg no-br btn">
            <Icon color="#929292" size={24} icon="like" />
          </button>
          <button className="no-bg no-br btn">
            <Icon color="#929292" size={24} icon="cart-outline" />
          </button>

          <div className="userMenu">
            <button className="no-bg no-br btn">
              <Icon color="#929292" size={24} icon="user" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;