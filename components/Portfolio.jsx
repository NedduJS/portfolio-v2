import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import PorfolioItem from './PorfolioItem';

import htmlImage from '../public/icon_html.svg';
import cssImage from '../public/icon_css.svg';
import jsImage from '../public/javascript.png';
import reactImage from '../public/react.svg';
import reduxImage from '../public/redux.svg';
import webpackImage from '../public/webpack.svg';
import gitImage from '../public/icon_git.svg';
import nodeImage from '../public/nodejs.svg';
import expressImage from '../public/express.svg';
import youtubeImage from '../public/youtube.svg';
import responsiveImage from '../public/responsive.svg';
import nextImage from '../public/next-js.svg';
import tsImage from '../public/icon_typescript.svg';
import djangoImage from '../public/django.svg';
import pythonImage from '../public/icon_python.svg';
import pandasImage from '../public/icon_pandas.svg';
import figmaImage from '../public/icon_figma.svg';
import invisionImage from '../public/icon_invision.svg';
import miroImage from '../public/icon_miro.svg';
import scikitImage from '../public/icon_scikit_learn.svg';
import tableauImage from '../public/tableau-software.svg';
import vueImage from '../public/vue.svg';
import nuxtImage from '../public/nuxt.svg';
import tailwindImage from '../public/tailwindcss.svg';
import solidityImage from '../public/solidity.svg';
import firebaseImage from '../public/firebase.svg';
import solanaImage from '../public/solana.svg';
import rustImage from '../public/rust.svg';

import platziVideoImg from '../public/platziVideo.png';
import badgesImg from '../public/badges.png';
import videoPlayerImg from '../public/videoPlayer.png';
import avoImg from '../public/avo.png';
import taskImg from '../public/task.png';
import pointsImg from '../public/points.png';
import productionImage from '../public/productionAnalysis.png';
import churnImage from '../public/churnPredictiveModel.png';
import vizgotImage from '../public/DatavizGOT.png';
import kontoCase from '../public/KontoCaseStudy.png';
import drawImage from '../public/drawide.jpg';
import roadImage from '../public/road2trillion.jpg';
import kontoImage from '../public/konto.jpg';
import marvelImage from '../public/marvelGifPortal.jpg';

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
  {
    techName: 'Sk-learn', //19
    techImage: scikitImage,
  },
  {
    techName: 'Tableau', //20
    techImage: tableauImage,
  },
  {
    techName: 'Vue', //21
    techImage: vueImage,
  },
  {
    techName: 'NuxtJS', //22
    techImage: nuxtImage,
  },
  {
    techName: 'TailwindCSS', //23
    techImage: tailwindImage,
  },
  {
    techName: 'Solidity', //24
    techImage: solidityImage,
  },
  {
    techName: 'Firebase', //25
    techImage: firebaseImage,
  },
  {
    techName: 'Solana', //26
    techImage: solanaImage,
  },
  {
    techName: 'Rust', //27
    techImage: rustImage,
  },
];

const portfolioList = [
  {
    title: 'Konto',
    techArray: [TechStack[3], TechStack[25], TechStack[23]],
    websiteImage: kontoImage,
    description:
      'Full Stack Web App developed with React using functional components and hooks, login with Google account, show pop-ups when an event is triggered. Handling application state with react-context',
    buttons: [
      {
        title: 'Web app',
        link: 'https://www.kontope.com/',
      },
    ],
  },
  {
    title: 'Avo Market',
    techArray: [TechStack[11], TechStack[12], TechStack[4]],
    websiteImage: avoImg,
    description:
      'My first project using Next and Typescript, it is an Avocado Market with interactive cart. The actions and states were done using redux',
    buttons: [
      {
        title: 'Web app',
        link: 'https://avomarket.vercel.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/curso-nextjs',
      },
    ],
  },
  {
    title: 'Draw-IDE',
    techArray: [TechStack[21], TechStack[22], TechStack[23]],
    websiteImage: drawImage,
    description:
      'Desktop web app to make visual diagrams with drag and drop, where you can the map the logic of a program with number types. I used this library: https://github.com/jerosoler/Drawflow',
    buttons: [
      {
        title: 'Web app',
        link: 'https://draw-ide.netlify.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/draw-ide',
      },
    ],
  },
  {
    title: 'Badge Management',
    techArray: [TechStack[3], TechStack[7], TechStack[8]],
    websiteImage: badgesImg,
    description:
      'Badge management system where you can add new badges, built with Express in the backend using MongoDB as database and Redux thunk to get and post API data ',
    buttons: [
      {
        title: 'Web app',
        link: 'https://badgesplatform.netlify.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/badgesFrotend',
      },
    ],
  },
  {
    title: 'Road to Trillion',
    techArray: [TechStack[3], TechStack[24]],
    websiteImage: roadImage,
    description:
      'Web 3.0 turn-based NFT videogame. The game flow is: Connect your Metamask wallet, mint your character (you will need fake Eth in the Rinkeby Test Network) and attack the boss. If you do not understand a shit, don`t worry. Me neither. I will make a tutorial to play the game soon 😉.',
    buttons: [
      {
        title: 'Web app',
        link: 'https://road-to-trillion.netlify.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/road-to-trillion',
      },
    ],
  },
  {
    title: 'Marvel Gif Portal',
    techArray: [TechStack[3], TechStack[26], TechStack[27]],
    websiteImage: marvelImage,
    description:
      'Web 3.0 application where you can share your favorites Marvel Gifs connecting your Solana Wallet.',
    buttons: [
      {
        title: 'Web app',
        link: 'https://marvel-gif-portal.netlify.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/gif-portal-starter',
      },
    ],
  },
  /* {
    title: 'Task Manager',
    techArray: [TechStack[13], TechStack[3], TechStack[4]],
    websiteImage: taskImg,
    description:
      'Web to manage tasks, with styles acording to the state. Some components were imported from Material UI. The backend is deployed in heroku and I used Django rest framework to make the CRUD',
    buttons: [
      {
        title: 'Web app',
        link: 'https://njstask.netlify.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/task-manager-frontend',
      },
    ],
  }, */
  {
    title: 'PlatziVideo',
    techArray: [TechStack[3], TechStack[4], TechStack[5]],
    websiteImage: platziVideoImg,
    description:
      'Video player application with dynamic favorites section and movie finder developed with React and Redux',
    buttons: [
      {
        title: 'Web app',
        link: 'https://platzivideo-react.netlify.app/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/platziVideoReact',
      },
    ],
  },
  {
    title: 'Netzi Video Player',
    techArray: [TechStack[2], TechStack[9], TechStack[10]],
    websiteImage: videoPlayerImg,
    description:
      'Video player built using the Youtube API with time bar, play/pause buttons and volume control implemented with JavaScript',
    buttons: [
      {
        title: 'Web app',
        link: 'https://nestoredduardo.github.io/videoPlayer/',
      },
      {
        title: 'Code',
        link: 'https://github.com/nestoredduardo/videoPlayer',
      },
    ],
  },
];

const designList = [
  {
    title: 'Konto UX/UI Case Study',
    techArray: [TechStack[16], TechStack[17], TechStack[18]],
    websiteImage: kontoCase,
    description:
      'Product design of a web that allows you to save on your subscriptions by sharing the costs with other people.',
    buttons: [
      {
        title: 'Case Study',
        link: 'https://www.behance.net/gallery/129130243/Konto-UXUI-Case-Study',
      },
    ],
  },
  {
    title: 'Extracurricular points - Design Process',
    techArray: [TechStack[16], TechStack[17], TechStack[18]],
    websiteImage: pointsImg,
    description:
      'This is my first project about product design, which brought me a lot of learning and practical experience. One of the main learnings is the importance of design to figure out what the user really needs. ',
    buttons: [
      {
        title: 'Case Study',
        link: 'https://uxfol.io/project/032e62b3/',
      },
    ],
  },
];

const dataScienceList = [
  {
    title: 'Two years churn predictive model',
    techArray: [TechStack[14], TechStack[15], TechStack[19]],
    websiteImage: churnImage,
    description:
      'In this project, I built a classification model that allows predicting if a client will stay less than two years with a product',
    buttons: [
      {
        title: 'Case Study and Code',
        link: 'https://deepnote.com/@nestoredduardo/Two-year-churn-predictive-model-pkdeh3LnSwmzhswl7sJ6oA',
      },
    ],
  },
  {
    title: 'Game of Thrones Deaths',
    techArray: [TechStack[20]],
    websiteImage: vizgotImage,
    description: 'Data visualization of Game of Thrones deaths using Tableau ',
    buttons: [
      {
        title: 'Watch data visualization',
        link: 'https://public.tableau.com/views/GameofThronesDeaths_16333610372280/Dashboard1?:language=es-ES&:display_count=n&:origin=viz_share_link',
      },
    ],
  },
  {
    title: 'Analysis of production data',
    techArray: [TechStack[14], TechStack[15]],
    websiteImage: productionImage,
    description:
      'In this project, I analyzed the data of a production company and did extrapolations about what is going on at the company.',
    buttons: [
      {
        title: 'Case Study and Code',
        link: 'https://deepnote.com/@nestoredduardo/Production-data-analysis-o1thilcxTc-dsisHlloI0g',
      },
    ],
  },
];

SwiperCore.use([Navigation, Pagination]);

const Portfolio = () => {
  const [field, setField] = useState('web');

  const handleField = (e) => {
    setField(e.target.attributes.name.value);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <div className="portfolio__fields">
        <span onClick={handleField} name="web">
          Web Dev
        </span>
        <span onClick={handleField} name="data">
          Data Science
        </span>
        <span onClick={handleField} name="design">
          Product Design
        </span>
      </div>
      <div className="portfolio__container container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination
        >
          {field === 'web' &&
            portfolioList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} field="web" />
                </SwiperSlide>
              );
            })}
          {field === 'design' &&
            designList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} design={true} field="design" />
                </SwiperSlide>
              );
            })}
          {field === 'data' &&
            dataScienceList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <PorfolioItem {...item} data={true} field="data" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
