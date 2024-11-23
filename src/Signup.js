
import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaPhoneAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate , Link } from "react-router-dom"; // For navigation
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const phoneRegex = /^[0-9]{10}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://simple-restaurant-backend.onrender.com/api/auth/signup", {
        name,
        phoneNumber,
        email,
        password,
      });

      alert(response.data.message);
      navigate("/login");

      // Reset form fields (optional)
      setName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error.response ? error.response.data.message : "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img
          src="images/login.webp" // Replace with your actual image URL
          alt="Signup"
        />
      </div>
      <div className="signup-right">
        <form onSubmit={handleSubmit} className="form">
          <h2>
            <center>Create Account</center>
          </h2>

          <div className="input-group">
            <label>Name</label>
            <div className="input-container">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <div className="input-container">
              <FaPhoneAlt className="icon" />
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-container">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="input-container">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="input-field"
              />
            </div>
          </div>

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

            {/* Login Up Link */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
            <span>You have an account? </span>
            <Link to="/login" style={{ color: "#4CAF50" }}>
              Login Up
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;

