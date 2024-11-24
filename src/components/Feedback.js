

import React, { useState } from "react";
import axios from "axios";
import { BsAlignCenter } from "react-icons/bs";
import "./Feedback.css"; // Import the CSS file

const Feedback = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/feedback", {
        username,
        phone,
        comments,
      });
      alert(response.data.message); // success message from backend
      setUsername("");
      setPhone("");
      setComments("");
    } catch (error) {
      // Improved error handling
      if (error.response) {
        // This is an HTTP error response
        alert("Error: " + (error.response.data?.message || "An error occurred"));
      } else if (error.request) {
        // The request was made but no response was received
        alert("Error: No response received from the server.");
      } else {
        // Something else went wrong in setting up the request
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="feedback-container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="inputField"
          />
        </div>

        <div className="inputGroup">
          <label className="label">Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="inputField"
          />
        </div>

        <div className="inputGroup">
          <label className="label">Comments</label>
          <textarea
            placeholder="Enter your comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            className="textareaField"
          />
        </div>

        <button type="submit" className="submitButton">
          Submit Feedback
        </button>
      </form>

      {/* Google Maps Location Embed */}
      <div className="googleMap">
        <h3 className="locheading">
          <center>Our Location</center>
        </h3>
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

export default Feedback;
