import React, { useState } from 'react';

import {
  UilHome,
  UilUser,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from '@iconscout/react-unicons';

const Header = () => {
  const [showMenu, setShowMenu] = useState('');

  const handleToggleClick = () => {
    setShowMenu('show-menu');
  };

  const handleCloseClick = () => {
    setShowMenu('');
  };

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          Nestor
        </a>
        <div className={`nav__menu ${showMenu}`}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link' onClick={handleCloseClick}>
                <UilHome /> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link' onClick={handleCloseClick}>
                <UilUser /> About
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#portfolio'
                className='nav__link'
                onClick={handleCloseClick}>
                <UilScenery /> Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#contact'
                className='nav__link'
                onClick={handleCloseClick}>
                <UilMessage /> Contact me
              </a>
            </li>
          </ul>
          <UilTimes
            className='uil uil-times nav__close'
            id='nav__close'
            onClick={handleCloseClick}
          />
        </div>
        <div className='nav__btns'>
          <div
            className='nav__toggle'
            id='nav-toggle'
            onClick={handleToggleClick}>
            <UilApps />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
