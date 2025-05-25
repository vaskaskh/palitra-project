import React from 'react';
import News from './news/News';
import Footer from './footer/Footer';
import Review from './review/Review';
import Main from './main/Main';
import Slider from './slider/Slider';
import Hero from './hero/Hero';
import Nav from './nav/Nav';

const Home = () => {


  return (
    <>
      <Nav/>
      <div className="container mx-auto px-4 space-y-8">
        <Main  />
        <News isTop />
      </div>

      <Hero/>

      <div className="container mx-auto px-4 space-y-8 mt-16">
        {/*/!*<Slider />*!/  not functional */}
        <Review />
        <News  />
        <Footer />
      </div>
    </>
  );
};

export default Home;
