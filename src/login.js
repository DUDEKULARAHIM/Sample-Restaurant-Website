import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa"; // FontAwesome icons for email and password

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert(response.data.message);
      // Redirect or handle the login success (store JWT token, etc.)
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginLeft}>
        <img
          src="images/feedback.jpg" // Replace with your actual image URL
          alt="Login"
          style={styles.loginImage}
        />
      </div>
      <div style={styles.loginRight}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2><center>Login</center></h2>

          <div style={styles.inputGroup}>
            <label>Email</label>
            <div style={styles.inputContainer}>
              <FaEnvelope style={styles.icon} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.inputField}
              />
            </div>
          </div>

          <div style={styles.inputGroup}>
            <label>Password</label>
            <div style={styles.inputContainer}>
              <FaLock style={styles.icon} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.inputField}
              />
            </div>
          </div>

          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: "flex",
    height: "100vh",
  },
  loginLeft: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Change as per your requirement
  },
  loginImage: {
    maxWidth: "100%",
    height: "80%",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  loginRight: {
    flex: 1,
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // border:"2px solid black",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    border:"2px solid black",
    padding:"60px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    marginTop: "5px",
  },
  icon: {
    color: "#888",
    marginRight: "10px",
    fontSize: "18px",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    outline: "none",
  },
  loginButton: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;