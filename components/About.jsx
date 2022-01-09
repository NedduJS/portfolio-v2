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
            Hi👋, I am a student of Industrial Engineering passionate about Data
            Science.
          </p>
          <p className="about__description">
            <p className="about__subdescription">
              The biggest companies in the world know how to create more value
              for users with data and use it as a competitive advantage.
            </p>
            <p className="about__subdescription">
              As Data Scientist, I want to be part of the team that it's working
              to make that possible. I manipulate, analyze and clean data using
              Python with libraries as numpy, pandas, matplotlib and build
              machine learning models with sklearn. To answer business questions
              I have used Power BI and Tableau.
            </p>
            <p className="about__subdescription">
              I am always learning new technologies to build things, create
              value and have fun
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
