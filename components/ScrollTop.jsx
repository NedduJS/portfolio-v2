import React, { useState } from 'react';
import { UilArrowUp } from '@iconscout/react-unicons';

const ScrollTop = () => {
  const [scroll, setScroll] = useState('');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 360) {
      setScroll('show-scroll');
    } else {
      setScroll('');
    }
  });

  return (
    <a href='#' className={`scrollup ${scroll}`} id='scroll-up'>
      <UilArrowUp className='scrollup__icon' />
    </a>
  );
};

export default ScrollTop;
