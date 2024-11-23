
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import Footer from './hero/Footer';
import { FaShoppingCart } from 'react-icons/fa';

const menuData = [
  {
    category: 'Drinks',
    items: [
      { id: 1, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/cooldrinks.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 2, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/coffee.png', originalPrice: 3.99, discountPercentage: 5 },
      { id: 3, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/drink3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 4, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/drink4.jpg', originalPrice: 3.99, discountPercentage: 5 },
    ],
  },
  {
    category: 'Starters Items',
    items: [
      { id: 5, name: 'Biryani', description: 'Spicy chicken biryani.', image: '/images/staters1.jpg', originalPrice: 10.99, discountPercentage: 15 },
      { id: 6, name: 'Fried Rice', description: 'Vegetable fried rice.', image: '/images/staters2.webp', originalPrice: 8.99, discountPercentage: 10 },
      { id: 7, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/staters3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 8, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/staters4.jpg', originalPrice: 3.99, discountPercentage: 5 },
    ],
  },
  {
    category: 'Veg Items',
    items: [
      { id: 9, name: 'Paneer Tikka', description: 'Grilled paneer with spices.', image: '/images/veg1.avif', originalPrice: 9.99, discountPercentage: 10 },
      { id: 10, name: 'Veg Burger', description: 'Delicious veggie burger.', image: '/images/veg2.jpg', originalPrice: 7.49, discountPercentage: 5 },
      { id: 11, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/veg3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 12, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/veg4.jpg', originalPrice: 3.99, discountPercentage: 5 },
    ],
  },
  {
    category: 'All Items',
    items: [
      { id: 1, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/all.avif', originalPrice: 2.99, discountPercentage: 10 },
      { id: 2, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/coffee.png', originalPrice: 3.99, discountPercentage: 5 },
      { id: 3, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/drink3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 4, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/drink4.jpg', originalPrice: 3.99, discountPercentage: 5 },
      { id: 5, name: 'Biryani', description: 'Spicy chicken biryani.', image: '/images/staters1.jpg', originalPrice: 10.99, discountPercentage: 15 },
      { id: 6, name: 'Fried Rice', description: 'Vegetable fried rice.', image: '/images/staters2.webp', originalPrice: 8.99, discountPercentage: 10 },
      { id: 7, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/staters3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 8, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/staters4.jpg', originalPrice: 3.99, discountPercentage: 5 },
      { id: 9, name: 'Paneer Tikka', description: 'Grilled paneer with spices.', image: '/images/pastrie1.jpg', originalPrice: 9.99, discountPercentage: 10 },
      { id: 10, name: 'Veg Burger', description: 'Delicious veggie burger.', image: '/images/veg1.avif', originalPrice: 7.49, discountPercentage: 5 },
      { id: 11, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/veg2.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 12, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/veg3.jpg', originalPrice: 3.99, discountPercentage: 5 },
      { id: 13, name: 'Chicken Curry', description: 'Spicy chicken curry.', image: '/images/main2.jpg', originalPrice: 11.99, discountPercentage: 20 },
      { id: 14, name: 'Fish Fry', description: 'Crispy fried fish.', image: '/images/main1.jpg', originalPrice: 13.99, discountPercentage: 10 },
      { id: 15, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/main3.webp', originalPrice: 2.99, discountPercentage: 10 },
      { id: 16, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/main4.jpg', originalPrice: 3.99, discountPercentage: 5 },
      { id: 17, name: 'Pizza', description: 'Cheesy margherita pizza.', image: '/images/pastrie2.webp', originalPrice: 12.99, discountPercentage: 15 },
      { id: 18, name: 'Fries', description: 'Crispy french fries.', image: '/images/pastrie1.jpg', originalPrice: 3.99, discountPercentage: 10 },
      { id: 19, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/pastrie3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 20, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/pastrie4.jpg', originalPrice: 3.99, discountPercentage: 5 },
      { id: 21, name: 'Pizza', description: 'Cheesy margherita pizza.', image: '/images/fastfood1.avif', originalPrice: 12.99, discountPercentage: 15 },
      { id: 22, name: 'Fries', description: 'Crispy french fries.', image: '/images/fastfood2.jpg', originalPrice: 3.99, discountPercentage: 10 },
      { id: 23, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/fastfood3.webp', originalPrice: 2.99, discountPercentage: 10 },
    ],
  },
  {
    category: 'Non-Veg Items',
    items: [
      { id: 13, name: 'Chicken Curry', description: 'Spicy chicken curry.', image: '/images/main2.jpg', originalPrice: 11.99, discountPercentage: 20 },
      { id: 14, name: 'Fish Fry', description: 'Crispy fried fish.', image: '/images/main1.jpg', originalPrice: 13.99, discountPercentage: 10 },
      { id: 15, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/main3.webp', originalPrice: 2.99, discountPercentage: 10 },
      { id: 16, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/main4.jpg', originalPrice: 3.99, discountPercentage: 5 },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { id: 17, name: 'Pizza', description: 'Cheesy margherita pizza.', image: '/images/pastrie2.webp', originalPrice: 12.99, discountPercentage: 15 },
      { id: 18, name: 'Fries', description: 'Crispy french fries.', image: '/images/pastrie1.jpg', originalPrice: 3.99, discountPercentage: 10 },
      { id: 19, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/pastrie3.jpg', originalPrice: 2.99, discountPercentage: 10 },
      { id: 20, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/pastrie4.jpg', originalPrice: 3.99, discountPercentage: 5 },
    ],
  },
  {
    category: 'Fast Food',
    items: [
      { id: 21, name: 'Pizza', description: 'Cheesy margherita pizza.', image: '/images/fastfood1.avif', originalPrice: 12.99, discountPercentage: 15 },
      { id: 22, name: 'Fries', description: 'Crispy french fries.', image: '/images/fastfood2.jpg', originalPrice: 3.99, discountPercentage: 10 },
      { id: 23, name: 'Lemonade', description: 'Freshly squeezed lemonade.', image: '/images/fastfood3.webp', originalPrice: 2.99, discountPercentage: 10 },
      // { id: 20, name: 'Iced Coffee', description: 'Chilled coffee with ice.', image: '/images/pastrie1.jpg', originalPrice: 3.99, discountPercentage: 5 },
    ],
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quantity, setQuantity] = useState({});
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // Function to add item to cart
  const addToCart = (item) => {
    const discountedPrice = item.originalPrice * (1 - item.discountPercentage / 100);
    const itemQuantity = quantity[item.id] || 1;
    
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += itemQuantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, discountedPrice, quantity: itemQuantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Handle quantity change
  const handleQuantityChange = (itemId, operation) => {
    setQuantity((prevQuantity) => {
      const currentQuantity = prevQuantity[itemId] || 1;
      let newQuantity = currentQuantity;
      if (operation === 'increment') newQuantity += 1;
      if (operation === 'decrement' && newQuantity > 1) newQuantity -= 1;
      return { ...prevQuantity, [itemId]: newQuantity };
    });
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Handle submit and redirect to reservation page
  const handleSubmit = () => {
    navigate('/reservation', { state: { cartItems: cart } });
  };

  return (
    <div className="menu-page">
      <div className="top-bar">
        <h1 className="menu-heading">Our Menu</h1>
        <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
          <FaShoppingCart size={30} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </div>

      {/* Food Categories */}
      <div className="categories">
        {menuData.map((category) => (
          <div
            key={category.category}
            className="category-circle"
            onClick={() => handleCategoryClick(category.category)}
          >
            <img src={category.items[0].image} alt={category.category} className="category-image" />
            <p className="category-name">{category.category}</p>
          </div>
        ))}
      </div>

      {/* Display Items of Selected Category */}
      <div className="menu-items">
        {selectedCategory && (
          <div className="menu-category">
            <h2 className="category-heading">{selectedCategory}</h2>
            <div className="item-cards">
              {menuData
                .find((category) => category.category === selectedCategory)
                .items.map((item) => {
                  const discountedPrice = item.originalPrice * (1 - item.discountPercentage / 100);
                  return (
                    <div key={item.id} className="item-card">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="item-info">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-description">{item.description}</p>
                        <div className="pricing">
                          <p className="original-price">
                            <span>Original Price: </span>${item.originalPrice.toFixed(2)}
                          </p>
                          <p className="discount-percentage">
                            <span>Discount: </span>{item.discountPercentage}% off
                          </p>
                          <p className="discounted-price">
                            <span>Discounted Price: </span>${discountedPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      {/* Quantity Control */}
                      <div className="quantity-control">
                        <button
                          className="quantity-button"
                          onClick={() => handleQuantityChange(item.id, 'decrement')}
                        >
                          -
                        </button>
                        <span className="quantity">{quantity[item.id] || 1}</span>
                        <button
                          className="quantity-button"
                          onClick={() => handleQuantityChange(item.id, 'increment')}
                        >
                          +
                        </button>
                      </div>
                      {/* Add to Cart Button */}
                      <button className="add-to-cart" onClick={() => addToCart(item)}>
                        <span>+</span> Add to Cart
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>

      {/* Cart Dropdown */}
      {showCart && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button className="close-cart" onClick={() => setShowCart(false)}>×</button>
          </div>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <span>
                      {item.name} - {item.quantity} x ${item.discountedPrice.toFixed(2)}
                    </span>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>×</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {cart.length > 0 && (
            <div className="cart-total">
              <p>
                Total: ${cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0).toFixed(2)}
              </p>
              <button className="submit-cart" onClick={handleSubmit}>
                Submit and Go to Reservation
              </button>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Menu;
