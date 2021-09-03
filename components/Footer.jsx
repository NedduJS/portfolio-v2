import React from 'react';
import {
  UilLinkedin,
  UilTwitter,
  UilInstagram,
} from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__bg'>
        <div className='footer__container container grid'>
          <div>
            <h1 className='footer__title'>Nestor</h1>
            <span className='footer__subtitle'>
              Software Developer - Data Scientist Jr
            </span>
          </div>
          <ul className='footer__links'>
            <li>
              <a href='#about' className='footer__link'>
                About
              </a>
            </li>
            <li>
              <a href='#portfolio' className='footer__link'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#contact' className='footer__link'>
                Contact me
              </a>
            </li>
          </ul>
          <div className='footer__socials'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/nestoredduardo/'
              className='footer__social'>
              <UilLinkedin />
            </a>
            <a
              target='_blank'
              href='https://twitter.com/nestoredduardo'
              className='footer__social'>
              <UilTwitter />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/nestoredduardo/'
              className='footer__social'>
              <UilInstagram />
            </a>
          </div>
        </div>
        <p className='footer__copy'>
          Nestor Eduardo Mamani Pantoja &#169; nestoredduardo. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
