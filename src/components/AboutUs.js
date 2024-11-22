import React from 'react';
import './AboutUs.css'; // Optional for external styling
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; 
import "./hero/Footer.css";

const AboutUs = () => {
  return (
    <div>
    <div className="about-us-section">
      <div className="about-us-content">
        <img 
          src="images/chef1.jpg" 
          alt="Description of the image"
          className="about-us-image"
        />
        <div className="about-us-text">
          <h2>Jagan Reddy</h2>
          <p>
            Our mission is to deliver excellence in everything we do. With a focus on innovation and customer satisfaction, This image captures our commitment to quality and growth.
          </p>
        </div>
      </div>
    </div>




    <div className="about-us-section">
      <div className="about-us-content">
        
        <div className="about-us-text">
          <h2>Ramesh</h2>
          <p>
            Our mission is to deliver excellence in everything we do. With a focus on innovation and customer satisfaction, we strive to create value and make a positive impact. This image captures our commitment to quality and growth.
          </p>
        </div>
        <img 
          src="images/chef2.jpg" 
          alt="Description of the image"
          className="about-us-image"
        />
      </div>
    </div>


      <div className="about-us-section">
      <div className="about-us-content">
        <img 
          src="images/chef3.webp" 
          alt="Description of the image"
          className="about-us-image"
        />
        <div className="about-us-text">
          <h2>Maruthi</h2>
          <p>
            Our mission is to deliver excellence in everything we do. With a focus on innovation and customer satisfaction, we strive to create value and make a positive impact. This image captures our commitment to quality and growth.
          </p>
        </div>
      </div>
      </div>





      <footer className="footer">
      <div className="footer-container">
        
        {/* Navigation Links */}
        <div className="footer-section footer-navigation">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>123 Foodie Street</p>
          <p>Food Town, FT 12345</p>
          <p>Email: info@restaurant.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Our Restaurant. All rights reserved.</p>
      </div>
    </footer>

      


</div>
  );
};

export default AboutUs;

