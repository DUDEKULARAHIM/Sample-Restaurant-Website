// src/components/OtherServices.js
import React from "react";
import { FaUtensils, FaShower, FaShieldAlt } from "react-icons/fa"; // Icons for the services
import "./OtherServices.css";

function OtherServices() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-items">
        
        {/* Quality of Food */}
        <div className="service-item">
          <FaUtensils className="service-icon" />
          <h3>Quality of Food</h3>
          <p>We prioritize quality in every ingredient to ensure the best taste and health benefits.</p>
        </div>

        {/* Hygienic */}
        <div className="service-item">
          <FaShower className="service-icon" />
          <h3>Hygienic</h3>
          <p>Our kitchen and facilities adhere to the highest standards of cleanliness and hygiene.</p>
        </div>

        {/* Safe and Secure */}
        <div className="service-item">
          <FaShieldAlt className="service-icon" />
          <h3>Safe and Secure</h3>
          <p>Your safety is our top priority with rigorous safety protocols at all times.</p>
        </div>

      </div>
    </div>
  );
}

export default OtherServices;
