import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import PorfolioItem from './PorfolioItem';

import htmlImage from '../public/icon_html.svg';
import cssImage from '../public/icon_css.svg';
import jsImage from '../public/icon_javascript.svg';
import reactImage from '../public/icon_react.svg';
import reduxImage from '../public/icon_redux.svg';
import webpackImage from '../public/icon_webpack.svg';
import gitImage from '../public/icon_git.svg';
import nodeImage from '../public/icon_nodejs.svg';
import expressImage from '../public/icon_express.svg';
import youtubeImage from '../public/icon_youtube.svg';
import responsiveImage from '../public/icon_responsive.svg';
import nextImage from '../public/icon_next.svg';
import tsImage from '../public/icon_typescript.svg';
import djangoImage from '../public/icon_django.svg';

import platziVideoImg from '../public/platziVideo.png';
import badgesImg from '../public/badges.png';
import videoPlayerImg from '../public/videoPlayer.png';
import avoImg from '../public/avo.png';
import taskImg from '../public/task.png';
import pointsImg from '../public/points.png';

const TechStack = [
  {
    techName: 'HTML',
    techImage: htmlImage,
  },
  {
    techName: 'CSS',
    techImage: cssImage,
  },
  {
    techName: 'JS',
    techImage: jsImage,
  },
  {
    techName: 'React',
    techImage: reactImage,
  },
  {
    techName: 'Redux',
    techImage: reduxImage,
  },
  {
    techName: 'Webpack',
    techImage: webpackImage,
  },
  {
    techName: 'Git',
    techImage: gitImage,
  },
  {
    techName: 'NodeJS',
    techImage: nodeImage,
  },
  {
    techName: 'Express',
    techImage: expressImage,
  },
  {
    techName: 'YT API',
    techImage: youtubeImage,
  },
  {
    techName: 'Responsive',
    techImage: responsiveImage,
  },
  {
    techName: 'Next.JS',
    techImage: nextImage,
  },
  {
    techName: 'Typescript',
    techImage: tsImage,
  },
  {
    techName: 'Django',
    techImage: djangoImage,
  },
];

const portfolioList = [
  {
    title: 'Avo Market',
    techArray: [TechStack[11], TechStack[12], TechStack[4]],
    websiteImage: avoImg,
    description:
      'My first project using Next and Typescript, it is an Avocado Market with interactive cart. The actions and states were done using redux',
    website: 'https://avomarket.vercel.app/',
    code: 'https://github.com/nestoredduardo/curso-nextjs',
  },
  {
    title: 'Task Manager',
    techArray: [TechStack[13], TechStack[3], TechStack[4]],
    websiteImage: taskImg,
    description:
      'Web to manage tasks, with styles acording to the state. Some components were imported from Material UI. The backend is deployed in heroku and I used Django rest framework to make the CRUD',
    website: 'https://njstask.netlify.app/',
    code: 'https://github.com/nestoredduardo/task-manager-frontend',
  },
  {
    title: 'Badge Management',
    techArray: [TechStack[3], TechStack[7], TechStack[8]],
    websiteImage: badgesImg,
    description:
      'Badge management system where you can add new badges, built with Express in the backend using MongoDB as database and Redux thunk to get and post API data ',
    website: 'https://badgesplatform.netlify.app/',
    code: 'https://github.com/nestoredduardo/badgesFrotend',
  },
  {
    title: 'PlatziVideo',
    techArray: [TechStack[3], TechStack[4], TechStack[5]],
    websiteImage: platziVideoImg,
    description:
      'Video player application with dynamic favorites section and movie finder developed with React and Redux',
    website: 'https://platzivideo-react.netlify.app/',
    code: 'https://github.com/nestoredduardo/platziVideoReact',
  },
  {
    title: 'Netzi Video Player',
    techArray: [TechStack[2], TechStack[9], TechStack[10]],
    websiteImage: videoPlayerImg,
    description:
      'Video player built using the Youtube API with time bar, play/pause buttons and volume control implemented with JavaScript',
    website: 'https://nestoredduardo.github.io/videoPlayer/',
    code: 'https://github.com/nestoredduardo/videoPlayer',
  },
];

const designList = [
  {
    title: 'Extracurricular points - Design Process',
    techArray: [TechStack[1], TechStack[2], TechStack[3]],
    websiteImage: pointsImg,
    description:
      'This is my first project about product design, which brought me a lot of learning and practical experience. One of the main learnings is the importance of design to figure out what the user really needs. ',
    website: 'https://uxfol.io/project/032e62b3/',
    code: '',
  },
];

SwiperCore.use([Navigation, Pagination]);

const Portfolio = () => {
  const [field, setField] = useState('web');

  const handleField = (e) => {
    setField(e.target.attributes.name.value);
  };

  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <div className='portfolio__fields'>
        <span onClick={handleField} name='web'>
          Web development
        </span>
        <span onClick={handleField} name='design'>
          Product Design
        </span>
      </div>
      <div className='portfolio__container container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination>
          {field === 'web' &&
            portfolioList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} />
                </SwiperSlide>
              );
            })}
          {field === 'design' &&
            designList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} design={true} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
