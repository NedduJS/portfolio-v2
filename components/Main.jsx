import React from 'react';

import Home from './Home';
import About from './About';
import Portfolio from './Main';

const Main = () => {
  return (
    <div className='main'>
      <Home />
      <About />
      <Portfolio />
    </div>
  );
};

export default Main;
