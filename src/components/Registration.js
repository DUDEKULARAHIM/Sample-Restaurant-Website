// src/components/Registration.js
import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";
import Footer from './hero/Footer';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    seats: "",
  });

  const { name, email, phone, date, time, seats } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit the registration form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://simple-restaurant-backend.onrender.com/api/registration", formData);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-image">
        <img src="images/feedback.jpg" alt="restaurant" />
      </div>
      <div className="registration-form-container">
        <h1>Reserve Your Seats</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Number of Seats</label>
            <input
              type="number"
              name="seats"
              value={seats}
              onChange={handleChange}
              placeholder="Enter number of seats"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
                <div>
                <Footer />
                </div>
    </div>
  );
};

export default Registration;
