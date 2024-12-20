import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa"; // FontAwesome icons for email and password
import { useNavigate , Link } from "react-router-dom";
import "./Login.css";
const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://simple-restaurant-backend.onrender.com/api/auth/login", {
        email,
        password,
      });

      alert(response.data.message);
      // Redirect or handle the login success (store JWT token, etc.)
      setIsAuthenticated(true); // Set authenticated state
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
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


// const styles = {
//   loginContainer: {
//     display: "flex",
//     height: "100vh",
//   },
//   loginLeft: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white", // Change as per your requirement
//   },
//   loginImage: {
//     maxWidth: "100%",
//     height: "80%",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   },
//   loginRight: {
//     flex: 1,
//     padding: "40px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     // border:"2px solid black",
//   },
//   form: {
//     width: "100%",
//     maxWidth: "400px",
//     border:"2px solid black",
//     padding:"60px",
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
//   loginButton: {
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

// export default Login;
