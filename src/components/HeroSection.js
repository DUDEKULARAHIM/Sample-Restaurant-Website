import React from 'react';
import Hero from './hero/Hero'; 
import Services from './hero/Services';
import About from './hero/About';
import OurServices from './hero/OurServices';
import Chef from './hero/Chef';
import Comment from './hero/Comments';
import OtherServices from './hero/OtherServices';
import Footer from './hero/Footer';
import FAQ from './hero/FAQ';
function HeroSection() {
  return (
    <div className='body'>
    
    <Hero />
    <About />
    <Services />
    <OtherServices />
    <OurServices />
    <Chef />
    <Comment />
    <FAQ />
    <Footer />
    </div>
  )
}

export default HeroSection