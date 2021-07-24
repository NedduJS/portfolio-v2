import React from 'react';
import Image from 'next/image';

import { UilArrowRight } from '@iconscout/react-unicons';

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
        src={`../public/${websiteImage}`}
        alt={title}
        className='portfolio__img'
        width='265'
        height='187'
      />
      <div className='portfolio__data'>
        <h3 className='portfolio__title'>{title}</h3>
        <p className='portfolio__description'>{description}</p>
        <a
          href={website}
          className='button button--flex button--small portfolio__button'>
          Website
          <UilArrowRight className='button__icon' />
        </a>
      </div>
    </div>
  );
};

export default PorfolioItem;
