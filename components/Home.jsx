import React from 'react';

import {
  UilLinkedin,
  UilGithub,
  UilTwitter,
  UilMessage,
} from '@iconscout/react-unicons';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home_content grid'>
          <div className='home__social'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/nestoredduardo/'
              className='home'>
              <UilLinkedin />
            </a>
            <a
              target='_blank'
              href='https://github.com/nestoredduardo'
              className='home'>
              <UilGithub />
            </a>
            <a
              target='_blank'
              href='https://twitter.com/nestoredduardo'
              className='home'>
              <UilTwitter />
            </a>
          </div>
          <div className='home__data'>
            <h1 className='home__title'>Nestor Mamani</h1>
            <h3 className='home__subtitle'>
              Software Developer - Industrial Engineer
            </h3>
            <p className='home__description'>Learning, Building and Sharing</p>
            <a href='#contact' className='button button--flex'>
              Contact Me
              <UilMessage />
            </a>
          </div>
        </div>
        <div className='home__scroll'></div>
      </div>
    </section>
  );
};

export default Home;
