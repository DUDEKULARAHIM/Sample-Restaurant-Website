import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css"; // Optional: add this for custom styles

// Update component name to start with an uppercase letter
const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Reset authentication state
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to the login page
  };

  // Close menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="navbar-logo">
        <NavLink to="/">
          <img src="/images/backlogo1.png" alt="Logo" className="logo-image" />
        </NavLink>
      </div>

      {/* Center: Navigation Links */}
      <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          About Us
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Menu
        </NavLink>
        <NavLink
          to="/reservation"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Reservation
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
          onClick={handleNavLinkClick}
        >
          Feedback
        </NavLink>
      </div>

      {/* Right side: Auth Buttons */}
      <div className="navbar-register">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="register-button">
            Logout
          </button>
        ) : (
          <>
            
            <NavLink to="/login" className="register-button" onClick={handleNavLinkClick}>
              Login
            </NavLink>
          </>
        )}
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </nav>
  );
};

export default Navbar;
