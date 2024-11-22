import React from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most items. Please contact customer service for more details.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order by visiting the 'Order Tracking' page on our website and entering your order number.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and times vary depending on your location.",
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
