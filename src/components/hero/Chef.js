import React from "react";
import "./Chef.css"; // Importing styles

function Chef() {
  // Array of chef details
  const chefs = [
    {
      image: "/images/chef1.jpg",
      name: "Chef John Doe",
      experience: "15 years",
      details: "Specializes in Italian & Mediterranean cuisine for fusion dishes.",
    },
    {
      image: "/images/chef3.webp",
      name: "Chef Jane Smith",
      experience: "10 years",
      details: "Known for innovative Asian dishes and modern culinary techniques.",
    },
    {
      image: "/images/chef2.jpg",
      name: "Chef Maria Gonzales",
      experience: "20 years",
      details: "Expert in French cuisine with a dedication to fine dining.",
    },
    {
      image: "/images/chef1.jpg",
      name: "Chef Maria Gonzales",
      experience: "20 years",
      details: "Expert in French cuisine with a dedication to fine dining.",
    },
    // Add more chef objects as needed
  ];

  return (
    <div className="chef-section">
      <h1>Meet Our Chefs</h1>
      <div className="chef-scroll-container">
        {chefs.map((chef, index) => (
          <div key={index} className="chef-card">
            <img src={chef.image} alt={chef.name} className="chef-image" />
            <h3 className="chef-name">{chef.name}</h3>
            <p className="chef-experience">Experience: {chef.experience}</p>
            <p className="chef-details">{chef.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chef;
