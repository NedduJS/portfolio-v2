import React from 'react';

import { UilDownloadAlt } from '@iconscout/react-unicons';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About me</h2>
      <span className='section__subtitle'>A little bit of my history</span>
      <div className='about__container container grid'>
        <img src='' alt='' className='about__img' />
        <div className='about__data'>
          <p className='about__description'>
            Geek of technology. Action bias. I love building solutions with code
            and working on projects with purpose.
          </p>
          <p className='about__description'>
            <p className='about__subdescription'>
              In my journey of learning new things, I had an idea which required
              me to make a website.
            </p>
            <p className='about__subdescription'>
              So I started to study web development at Platzi. Nowadays I have
              done responsive websites using React functional components and
              Next.
            </p>
            <p className='about__subdescription'>
              To make the backend of the websites I have worked with Express and
              Django rest framework.
            </p>
            <p className='about__subdescription'>
              To figure out the website design and functionalities I use the
              design process from user requirements, user histories, mockups,
              low and high fidelity design in Figma.
            </p>
          </p>
          <div className='about__buttons'>
            <a
              href='https://drive.google.com/file/d/1OlbSsKrRgMW4BkfD7DilRCUxUBBjvWXy/view?usp=sharing'
              target='_blank'
              className='button button--flex'>
              Watch CV
              <UilDownloadAlt className='button__icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
