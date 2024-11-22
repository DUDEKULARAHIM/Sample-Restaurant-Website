import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import Footer from './hero/Footer';

// Sample data for menu items
const menuData = [
  {
    category: 'Starters',
    items: [
      {
        id: 1,
        name: 'Spring Rolls',
        description: 'Crispy spring rolls filled with veggies.',
        image: '/images/staters1.jpg',
        originalPrice: 5.99,
        discountPercentage: 20,
      },
      {
        id: 2,
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter and herbs.',
        image: '/images/staters3.jpg',
        originalPrice: 3.49,
        discountPercentage: 10,
      },
      {
        id: 3,
        name: 'Spring Rolls',
        description: 'Crispy spring rolls filled with veggies.',
        image: '/images/staters4.jpg',
        originalPrice: 5.99,
        discountPercentage: 20,
      },
      {
        id: 4,
        name: 'Spring Paneer',
        description: 'Crispy spring rolls filled with veggies.',
        image: '/images/staters2.webp',
        originalPrice: 5.99,
        discountPercentage: 20,
      },
    ],
  },
  {
    category: 'Main Course',
    items: [
      {
        id: 5,
        name: 'Grilled Chicken',
        description: 'Juicy grilled chicken with herbs.',
        image: '/images/main1.jpg',
        originalPrice: 12.99,
        discountPercentage: 15,
      },
      {
        id: 6,
        name: 'Veggie Burger',
        description: 'A delicious veggie patty in a soft bun.',
        image: '/images/main2.jpg',
        originalPrice: 8.49,
        discountPercentage: 5,
      },
      {
        id: 7,
        name: 'Paneer',
        description: 'A delicious veggie patty in a soft bun.',
        image: '/images/main4.jpg',
        originalPrice: 8.49,
        discountPercentage: 5,
      },
      {
        id: 8,
        name: 'Veg Biryani',
        description: 'A delicious veggie patty in a soft bun.',
        image: '/images/main3.webp',
        originalPrice: 8.49,
        discountPercentage: 5,
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        id: 9,
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with a creamy filling.',
        image: '/images/pastrie1.jpg',
        originalPrice: 4.99,
        discountPercentage: 25,
      },
      {
        id: 10,
        name: 'Ice Cream',
        description: 'Vanilla ice cream topped with syrup.',
        image: '/images/pastrie2.webp',
        originalPrice: 3.99,
        discountPercentage: 10,
      },
      {
        id: 11,
        name: 'Pastrie',
        description: 'A delicious veggie patty in a soft bun.',
        image: '/images/pastrie3.jpg',
        originalPrice: 8.49,
        discountPercentage: 5,
      },
    ],
  },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [quantity, setQuantity] = useState({});
  const navigate = useNavigate();

  // Function to add item to cart
  const addToCart = (item) => {
    const discountedPrice = item.originalPrice * (1 - item.discountPercentage / 100);
    const itemQuantity = quantity[item.id] || 1;
    const cartItem = { ...item, discountedPrice, quantity: itemQuantity };
    setCart((prevCart) => [...prevCart, cartItem]);
    console.log('Item added to cart:', cartItem);
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

  // Function to handle submit and redirect to reservation page
  const handleSubmit = () => {
    navigate('/reservation', { state: { cartItems: cart } });
  };

  // Function to handle image zoom
  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

  // Function to close zoomed image
  const handleZoomClose = () => {
    setZoomedImage(null);
  };

  return (
    <div className="menu-page">
      <h1 className="menu-heading">Our Menu</h1>

      <div className="menu-items">
        {menuData.map((category) => (
          <div key={category.category} className="menu-category">
            <h2 className="category-heading">{category.category}</h2>

            <div className="item-cards">
              {category.items.map((item) => {
                const discountedPrice = item.originalPrice * (1 - item.discountPercentage / 100);
                return (
                  <div key={item.id} className="item-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                      onClick={() => handleImageClick(item.image)}
                    />
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
        ))}
      </div>

      {/* Cart Summary Section */}
      <div className="cart-summary">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.quantity} x ${item.discountedPrice.toFixed(2)}
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

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div className="zoomed-image-modal" onClick={handleZoomClose}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
      <div className='footer'>
      <Footer />
      </div>
    </div>
  );
};

export default Menu;





