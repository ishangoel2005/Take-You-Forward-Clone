import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Gear Up for <span>Success</span>: Your Ultimate Preparation Hub!</h1>
      <p>Navigate Your Learning Adventure: Explore DSA, Master CS Concepts, Design Systems, and Ace Interviews Effortlessly.</p>
      
      <div className="explore-box">
        <div className="explore-content">
          <h2>Elevate Your Learning Journey with TUF+ Course</h2>
          <p>Curated learning, approach-wise solutions, personalized roadmaps, expert doubt assistance, and more!</p>
        </div>
        <button>Explore Plus</button>
      </div>
    </section>
  );
};

export default HeroSection;
