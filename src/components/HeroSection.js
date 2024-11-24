
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
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
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing for the animation
      once: false, // Run animation only once
    });
  }, []);

  return (
    <div className="body">
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="fade-up">
        <OtherServices />
      </div>
      <div data-aos="fade-up">
        <OurServices />
      </div>
      <div data-aos="fade-up">
        <Chef />
      </div>
      <div data-aos="fade-up">
        <Comment />
      </div>
      <div data-aos="fade-up">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HeroSection;



