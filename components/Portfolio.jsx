import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

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

import platziVideoImg from '../public/platziVideo.png';
import badgesImg from '../public/badges.png';
import videoPlayerImg from '../public/videoPlayer.png';

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
    techName: 'Youtube API',
    techImage: youtubeImage,
  },
  {
    techName: 'Responsive Design',
    techImage: responsiveImage,
  },
];

const portfolioList = [
  {
    title: 'Badge Management',
    techArray: [TechStack[1], TechStack[2], TechStack[3]],
    websiteImage: badgesImg,
    description:
      'Badge management system where you can add new badges, built with Express in the backend using MongoDB as database and Redux thunk to get and post API data ',
    website: 'https://badgesplatform.netlify.app/',
    code: 'https://github.com/NedduJS/badgesFrotend',
  },
  {
    title: 'PlatziVideo',
    techArray: [TechStack[1], TechStack[2], TechStack[3]],
    websiteImage: platziVideoImg,
    description:
      'Video player application with dynamic favorites section and movie finder developed with React and Redux',
    website: 'https://platzivideo-react.netlify.app/',
    code: 'https://github.com/NedduJS/platziVideoReact',
  },
  {
    title: 'Netzi Video Player',
    techArray: [TechStack[1], TechStack[2], TechStack[3]],
    websiteImage: videoPlayerImg,
    description:
      'Video player built using the Youtube API with time bar, play/pause buttons and volume control implemented with JavaScript',
    website: 'https://neddujs.github.io/videoPlayer/',
    code: 'https://github.com/NedduJS/videoPlayer',
  },
];

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <div className='portfolio__container container'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {portfolioList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <PorfolioItem  {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
