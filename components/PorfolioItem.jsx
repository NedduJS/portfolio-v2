import React from 'react';
import Image from 'next/image';

import Tech from './Tech';
import WebTech from './WebTech';
import { UilArrowRight, UilArrow } from '@iconscout/react-unicons';

const PorfolioItem = ({
  title,
  techArray,
  websiteImage,
  description,
  field,
  buttons,
}) => {
  return (
    <div className="portfolio__content grid">
      <div className="portfolio__media">
        <div className="w-80 md:w-96">
          <Image
            src={websiteImage}
            alt={title}
            className="portfolio__img"
            layout="responsive"
          />
        </div>
        <div className="proyectItem__tech">
          {techArray.map((item, index) => {
            if (field === 'web') {
              return <WebTech {...item} key={index} />;
            } else {
              return <Tech {...item} key={index} />;
            }
          })}
        </div>
      </div>
      <div className="portfolio__data">
        <h3 className="portfolio__title">{title}</h3>
        <p className="portfolio__description">{description}</p>
        <div className="portfolio__buttons">
          {buttons.map((button) => {
            return (
              <a
                href={button.link}
                target="_blank"
                className="button button--flex button--small portfolio__button"
              >
                {button.title}
                <UilArrowRight className="button__icon" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PorfolioItem;
