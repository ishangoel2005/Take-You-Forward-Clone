import React from 'react';
import './FAQ.css'
import { FiPlus } from 'react-icons/fi';

const FAQ = () => {
  const faqData = [
    "What's the best way to prepare for coding interviews?",
    'How should I approach system design interview questions?',
    "Are the Striver's SDE sheet questions enough for interview preparation?",
    'How do I get the most out of your website or TUF community?',
    'What are the essential things to cover in core coding subjects?',
    'Do you offer any mentorship or career guidance programs?',
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((question, index) => (
          <li key={index} className="faq-item">
            {question}
            <FiPlus className="faq-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
