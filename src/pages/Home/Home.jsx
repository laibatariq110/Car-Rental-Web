import React from 'react';
import Header from '../../Header';
import HeroSec from '../../HeroSec';
import Form from '../../Form';
import BookingAssistance from '../../BookingAssistance';
import Selection from '../../Selection';
import WhyUsSec from '../../WhyUsSec';
import Testimonials from '../../Testimonials';
import Faq from '../../Faq';
import Footer from '../../Footer';

const Home = () => {
    return (
      <>
        <Header />
        <HeroSec />
        <Form/>
        <BookingAssistance/>
        <Selection/>
        <WhyUsSec/>
        <Testimonials/>
        <Faq/>
        <Footer />
        
      </>
    );
  };
  
  export default Home;