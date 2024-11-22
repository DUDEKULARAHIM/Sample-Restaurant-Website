import React from 'react';
import './Services.css'; // Optional for external styling

const Services = () => {
  return (
    <div className="services-section">
      <h1>Our Specialties</h1>
      <div className="specialties-list">
        <div className="specialty-item">
          <img 
            src="/images/coffee.png" 
            alt="Pizza" 
            className="specialty-image" 
            width="150" 
            height="150" 
          />
          <p className="specialty-name">Tea's</p>
        </div>
        <div className="specialty-item">
          <img 
            src="/images/pastrie.jpg" 
            alt="Burger" 
            className="specialty-image" 
            width="150" 
            height="150" 
          />
          <p className="specialty-name">Pastrie</p>
        </div>
        <div className="specialty-item">
          <img 
            src="images/friedrice.jpg" 
            alt="Pasta" 
            className="specialty-image" 
            width="150" 
            height="150" 
          />
          <p className="specialty-name">Fried Rice</p>
        </div>
        <div className="specialty-item">
          <img 
            src="images/biryani.webp" 
            alt="Sushi" 
            className="specialty-image" 
            width="150" 
            height="150" 
          />
          <p className="specialty-name">Veg-Items</p>
        </div>
        <div className="specialty-item">
          <img 
            src="images/about8.webp" 
            alt="Salad" 
            className="specialty-image" 
            width="150" 
            height="150" 
          />
          <p className="specialty-name">Non-veg Items</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
