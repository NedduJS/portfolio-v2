import React, { useState, useEffect } from 'react';

import {
  UilHome,
  UilUser,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons';

const Header = () => {
  const [showMenu, setShowMenu] = useState('');
  const [scroll, setScroll] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 200) {
        setScroll('scroll-header');
      } else {
        setScroll('');
      }
    });
  }, []);

  const handleToggleClick = () => {
    setShowMenu('show-menu');
  };

  const handleCloseClick = () => {
    setShowMenu('');
  };

  const handleThemeClick = () => {
    if (theme === 'light') {
      window.document.body.classList.add('dark-theme');
      setTheme('dark');
    } else {
      window.document.body.classList.remove('dark-theme');
      setTheme('light');
    }
  };

  return (
    <header className={`header ${scroll}`} id='header'>
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
          {theme === 'light' ? (
            <UilMoon
              className='change-theme'
              id='theme-button'
              onClick={handleThemeClick}
            />
          ) : (
            <UilSun
              className='change-theme'
              id='theme-button'
              onClick={handleThemeClick}
            />
          )}

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
