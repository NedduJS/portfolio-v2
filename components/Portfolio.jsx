import React from 'react';

import PorfolioList from './PorfolioList';

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <div className='portfolio__container container'>
        <PorfolioList />
      </div>
    </section>
  );
};

export default Portfolio;
