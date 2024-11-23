
import React, { useState } from "react";
import axios from "axios";
import { BsAlignCenter } from "react-icons/bs";

const Feedback = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://simple-restaurant-backend.onrender.com/api/feedback", {
        username,
        phone,
        comments,
      });
      alert(response.data.message); // success message from backend
      setUsername("");
      setPhone("");
      setComments("");
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div>
    <div style={styles.container}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}> Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Comments</label>
          <textarea
            placeholder="Enter your comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            style={styles.textareaField}
          />
        </div>

        <button type="submit" style={styles.submitButton}>Submit Feedback</button>
      </form>

    </div>

     {/* Google Maps Location Embed */}
     <div style={styles.googleMap}>
        <h3 style={styles.locheading}><center>Our Location</center></h3>
        <iframe
          title="Abhiruchi Family Restaurant Location"
          width="1500"
          height="400"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.6924921281206!2d79.26973878012691!3d15.73956478420632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5319757a65849%3A0xb132df32f7cc44e1!2sAbhiruchi%20Family%20Restaurant!5e0!3m2!1sen!2sin!4v1731242731410!5m2!1sen!2sin"
        ></iframe>
      </div>



    </div>
  );
};

const styles = {
  container: {
    width: "70%",
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height:"38PX",
    fontSize:"17px",
    
  },
  textareaField: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    height: "100px",

  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },


  googleMap: {
    marginTop: "40px",
    textAlign: "center",
    width: "100%",
    maxWidth: "1000px", // Max width for large screens
  },
  iframe: {
    width: "100%",
    height: "400px", // Default height
    border: "0",
  },
  locheading: {
    textAlign: "center",
    marginBottom : "10px",
    fontSize: "35px",
  }

  /* Responsive styling for the Google Maps iframe */
//   @media (max-width: 768px) {
//     .google-map iframe {
//       width: 100%;
//       height: 300px;
//     }
//   }


};

export default Feedback;
