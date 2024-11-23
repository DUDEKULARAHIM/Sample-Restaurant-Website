
import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate , Link } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://simple-restaurant-backend.onrender.com
/api/auth/login", {
        email,
        password,
      });

      alert(response.data.message);
      setIsAuthenticated(true); // Set authenticated state
      navigate("/"); // Redirect to the homepage
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="images/signup1.avif" // Replace with your actual image URL
          alt="Login"
        />
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} className="form">
          <h2>
            <center>Login</center>
          </h2>
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
          <button type="submit" className="login-button">
            Login
          </button>

            {/* Sign Up Link */}
            <div style={{ marginTop: "20px", textAlign: "center" }}>
            <span>Don't have an account? </span>
            <Link to="/signup" style={{ color: "#4CAF50" }}>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
