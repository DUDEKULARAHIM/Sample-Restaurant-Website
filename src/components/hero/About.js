// src/pages/About.js
import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Optional for styling

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        We are committed to bringing you the best dining experience, focusing on
        fresh ingredients, delicious recipes, and exceptional customer service.
        Join us to discover a culinary experience that’s both delightful and
        memorable.
      </p>
      <Link to="/about">
        <button className="about-button">Learn More</button>
      </Link>
    </div>
  );
}

export default About;
