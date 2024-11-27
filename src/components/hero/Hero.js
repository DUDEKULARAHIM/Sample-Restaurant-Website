import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [dynamicText, setDynamicText] = useState("Taste");

  useEffect(() => {
    const words = ["Taste", "Food", "Quality"];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % words.length;
      setDynamicText(words[index]);
    }, 1500); // Change word every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h3>Welcome</h3>
        <h3>Our Services ... {dynamicText}</h3>
        <p>The most delicious items are available here!</p>
      </div>
    </div>
  );
};

export default Hero;
