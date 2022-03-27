import React from 'react';

import { UilDownloadAlt } from '@iconscout/react-unicons';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      {/* <span className="section__subtitle about__subtitle">
        A little bit of my history
      </span> */}
      <div className="about__container container grid">
        <img src="" alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Hi👋, I am a Full Stack Engineer building great products that people
            love using.
          </p>
          <p className="about__description">
            <ul className="about__subdescription">
              <li>
                📌 Proficiency in building products with React.js, Next.js,
                TailwindCSS
              </li>
              <li>
                📌 Experience doing product development: Starting from the idea,
                define aims and features, design and build MVP
              </li>
              <li>
                📌 Web3 artisan implementing features like getting NFTs from
                accounts and working with Solana's smart contracts.
              </li>
            </ul>
            <p className="about__subdescription">
              I am always learning new technologies to build things, create
              value and have fun 👇
            </p>
            <p className="about__subdescription">
              🔥 If you want to see some of my projects (Ex. Data Science,
              Failed startup, Web3.0 ) Click below 👇
            </p>
          </p>
          <div className="about__buttons">
            <a href="#portfolio" className="button button--flex">
              Watch Projects
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
