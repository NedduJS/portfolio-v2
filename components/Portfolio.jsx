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
import pythonImage from '../public/icon_python.svg';
import pandasImage from '../public/icon_pandas.svg';
import figmaImage from '../public/icon_figma.svg';
import invisionImage from '../public/icon_invision.svg';
import miroImage from '../public/icon_miro.svg';

import platziVideoImg from '../public/platziVideo.png';
import badgesImg from '../public/badges.png';
import videoPlayerImg from '../public/videoPlayer.png';
import avoImg from '../public/avo.png';
import taskImg from '../public/task.png';
import pointsImg from '../public/points.png';
import productionImage from '../public/productionAnalysis.png';

const TechStack = [
  {
    techName: 'HTML', //0
    techImage: htmlImage,
  },
  {
    techName: 'CSS', //1
    techImage: cssImage,
  },
  {
    techName: 'JS', //2
    techImage: jsImage,
  },
  {
    techName: 'React', //3
    techImage: reactImage,
  },
  {
    techName: 'Redux', //4
    techImage: reduxImage,
  },
  {
    techName: 'Webpack', //5
    techImage: webpackImage,
  },
  {
    techName: 'Git', //6
    techImage: gitImage,
  },
  {
    techName: 'NodeJS', //7
    techImage: nodeImage,
  },
  {
    techName: 'Express', //8
    techImage: expressImage,
  },
  {
    techName: 'YT API', //9
    techImage: youtubeImage,
  },
  {
    techName: 'Responsive', //10
    techImage: responsiveImage,
  },
  {
    techName: 'Next.JS', //11
    techImage: nextImage,
  },
  {
    techName: 'Typescript', //12
    techImage: tsImage,
  },
  {
    techName: 'Django', //13
    techImage: djangoImage,
  },
  {
    techName: 'Python', //14
    techImage: pythonImage,
  },
  {
    techName: 'Pandas', //15
    techImage: pandasImage,
  },
  {
    techName: 'Figma', //16
    techImage: figmaImage,
  },
  {
    techName: 'Invision', //17
    techImage: invisionImage,
  },
  {
    techName: 'Miro', //18
    techImage: miroImage,
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
    techArray: [TechStack[16], TechStack[17], TechStack[18]],
    websiteImage: pointsImg,
    description:
      'This is my first project about product design, which brought me a lot of learning and practical experience. One of the main learnings is the importance of design to figure out what the user really needs. ',
    website: 'https://uxfol.io/project/032e62b3/',
    code: '',
  },
];

const dataScienceList = [
  {
    title: 'Analysis of production data',
    techArray: [TechStack[14], TechStack[15]],
    websiteImage: productionImage,
    description:
      'In this project, I analyzed the data of a production company and did extrapolations about what is going on at the company.',
    website: '',
    code: 'https://github.com/nestoredduardo/data-analysis-production/blob/main/An%C3%A1lisisProducci%C3%B3n.ipynb',
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
          Web Dev
        </span>
        <span onClick={handleField} name='data'>
          Data Science
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
                  <PorfolioItem {...item} field='web' />
                </SwiperSlide>
              );
            })}
          {field === 'design' &&
            designList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} design={true} field='design' />
                </SwiperSlide>
              );
            })}
          {field === 'data' &&
            dataScienceList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} data={true} field='data' />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
