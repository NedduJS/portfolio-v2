import React from 'react';

import { UilDownloadAlt } from '@iconscout/react-unicons';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle about__subtitle">
        A little bit of my history
      </span>
      <div className="about__container container grid">
        <img src="" alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Filled by curiosity. Action bias. I aim creating value using
            technology and working on projects with purpose.
          </p>
          <p className="about__description">
            <p className="about__subdescription">
              In my journey of learning new things, I had an idea which required
              me to make a website.
            </p>
            <p className="about__subdescription">
              So I started to study Web Development at Platzi. Nowadays I have
              done responsive websites using React and Next.
            </p>
            <p className="about__subdescription">
              To make the backend of the websites I have worked with Express and
              Django rest framework.
            </p>
            <p className="about__subdescription">
              To figure out the website design and functionalities I use the
              design process from user research, user histories, low and high
              fidelity design in Figma.
            </p>
            <p className="about__subdescription">
              And in order to make more powerful my applications, I am learning
              Data Science with{' '}
              <a
                className="about__description--link"
                target="_blank"
                href="https://platzi.com/p/nestoredduardo/"
              >
                Platzi
              </a>{' '}
              and{' '}
              <a
                className="about__description--link"
                target="_blank"
                href="https://www.kaggle.com/nestoredduardo"
              >
                Kaggle
              </a>
              .
            </p>
          </p>
          <div className="about__buttons">
            <a
              href="https://drive.google.com/file/d/1JTiwHRAxbri_fQeEY6rp4M7fX7tIjaP7/view?usp=sharing"
              target="_blank"
              className="button button--flex"
            >
              Watch CV
              <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
