import React from 'react';

import PorfolioItem from './PorfolioItem';

import {
  UilHtml5,
  UilCss3Simple,
  UilJavaScript,
} from '@iconscout/react-unicons';

const PorfolioList = () => {
  const TechStack = [
    {
      techName: 'HTML',
      techImage: UilHtml5,
    },
    {
      techName: 'CSS',
      techImage: UilJavaScript,
    },
    {
      techName: 'JS',
      techImage: UilJavaScript,
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
      websiteImage: badges,
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

  return (
    <div>
      {portfolioList.map((item, index) => {
        return <PorfolioItem {...item} key={index} />;
      })}
    </div>
  );
};

export default PorfolioList;
