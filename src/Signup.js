import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaPhoneAlt, FaEnvelope, FaLock } from "react-icons/fa"; // FontAwesome icons
import { useNavigate , Link } from "react-router-dom"; // For navigation
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("https://simple-restaurant-backend.onrender.com/api/auth/signup", {
        name,
        phoneNumber,
        email,
        password,
      });

      alert(response.data.message);
       navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
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

// const styles = {
//   signupContainer: {
//     display: "flex",
//     height: "100vh",
//     flexWrap: "wrap",
//   },
//   signupLeft: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   signupImage: {
//     maxWidth: "100%",
//     height: "90%",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   signupRight: {
//     flex: 1,
//     padding: "40px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   form: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "30px 70px",
//     border: "2px solid black",
//   },
//   inputGroup: {
//     marginBottom: "20px",
//   },
//   inputContainer: {
//     display: "flex",
//     alignItems: "center",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     padding: "10px",
//     marginTop: "5px",
//   },
//   icon: {
//     color: "#888",
//     marginRight: "10px",
//     fontSize: "18px",
//   },
//   inputField: {
//     width: "100%",
//     padding: "12px",
//     fontSize: "16px",
//     border: "none",
//     outline: "none",
//   },
//   signupButton: {
//     width: "100%",
//     padding: "14px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

export default Signup;
