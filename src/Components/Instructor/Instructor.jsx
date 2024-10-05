import React from 'react';
import './Instructor.css';

const Instructor = () => {
  return (
    <div className="instructor-section">
      <h2>Meet Our Exceptional Instructor</h2>
      <div className="instructor-content">
        <div className="instructor-image"></div>
        <div className="instructor-details">
          <h3>Raj Vikramaditya</h3>
          <p>SWE-III @ Google | Founder takeUforward</p>
          <ul>
            <li>Software Engineer at Google.</li>
            <li>Offers from Facebook London and other startups.</li>
            <li>Previously worked with Amazon, Media.net.</li>
            <li>Followed by 1M+ people across YT, Linkedin, and other socials.</li>
            <li>Candidate Master at Codeforces.</li>
            <li>6* at Codechef.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
