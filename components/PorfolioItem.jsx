import React from 'react';
import Image from 'next/image';

import { UilArrowRight, UilArrow } from '@iconscout/react-unicons';

const PorfolioItem = ({
  title,
  techArray,
  websiteImage,
  description,
  website,
  code,
}) => {
  return (
    <div className='portfolio__content grid'>
      <Image
        src={websiteImage}
        alt={title}
        className='portfolio__img'
        width='265'
        height='170'
      />
      <div className='portfolio__data'>
        <h3 className='portfolio__title'>{title}</h3>
        <p className='portfolio__description'>{description}</p>
        <div className='portfolio__buttons'>
          <a
            href={website}
            target='_blank'
            className='button button--flex button--small portfolio__button'>
            Website
            <UilArrowRight className='button__icon' />
          </a>
          <a
            href={code}
            target='_blank'
            className='button button--flex button--small portfolio__button'>
            Code
            <UilArrow className='button__icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PorfolioItem;
