// src/pages/OurServices.js
import React from "react";
import "./OurServices.css";

function OurServices() {
  // Array of recipes with image, name, and note
  const recipes = [
    {
      image: "/images/main2.jpg",
      name: "Spaghetti Carbonara",
      note: "Classic Italian pasta with creamy sauce.",
    },
    {
      image: "/images/friedrice.jpg",
      name: "Margherita Fried Rice",
      note: "Fresh mozzarella, basil, and tomato sauce.",
    },
    {
      image: "/images/pastrie.jpg",
      name: "Caesar Salad&Pastrie",
      note: "Crisp romaine lettuce with parmesan and croutons.",
    },
    {
      image: "/images/biryani.webp",
      name: "Biryani",
      note: "Rich, coffee-flavored Italian dessert.",
    },
    // {
    //   image: "/images/about8.webp",
    //   name: "French Onion Soup",
    //   note: "Caramelized onions with a savory broth.",
    // },
   
  ];

  return (
    <div className="our-services">
      {/* <h1>Our Services</h1> */}
      <div className="recipe-cards">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3 className="recipe-name">{recipe.name}</h3>
            <p className="recipe-note">{recipe.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
