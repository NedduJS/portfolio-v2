import React from 'react';

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTop from './ScrollTop';


const Main = () => {
  return (
    <div className='main'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Main;
