import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Comments.css";


function Comments() {
  const comments = [
    {
      image: "/images/feedback.jpg",
      name: "Alice Johnson",
      rating: 4,
      comment: "The food was absolutely amazing! Loved the atmosphere as well.",
    },
    {
      image: "/images/about8.webp",
      name: "David Smith",
      rating: 5,
      comment: "An outstanding experience! Will definitely come back.",
    },
    {
      image: "/images/about8.webp",
      name: "Emma Wilson",
      rating: 4,
      comment: "Loved the desserts, they were delightful!",
    },
    {
      image: "/images/feedback.jpg",
      name: "Chris Johnson",
      rating: 4,
      comment: "Nice place to hang out with friends. Good food and ambiance.",
    },
  ];

  return (
    <div>
      <h2 className="comments-heading"><center>Comments</center></h2>
      {/* live comments fetched by backend */}
      

      <div className="comments-section">
        {comments.map((person, index) => (
          <div key={index} className="comment-card">
            <div className="comment-header">
              <img src={person.image} alt={person.name} className="person-image" />
              <div className="person-info">
                <h4 className="person-name">{person.name}</h4>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} color={i < person.rating ? "#FFD700" : "#e4e5e9"} />
                  ))}
                </div>
              </div>
            </div>
            <p className="comment-text">{person.comment}</p>
          </div>
        ))}
      </div>

      {/* Button to redirect to feedback */}
      <div className="feedback-button-container">
        <Link to="/feedback">
          <button className="feedback-button">Leave Your Feedback</button>
        </Link>
      </div>
    </div>
  );
}

export default Comments;
