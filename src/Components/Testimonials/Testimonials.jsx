import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Athang Kulkarni',
    title: 'Software Engineer @ Walmart',
    text: 'DP and Graphs? Used to terrify me! I used to skip problems related to them without a second thought. Then I discovered Strivers series. By the end, I was tackling Recursion, DP, and Graphs with confidence, even solving problems independently. Huge thanks ...'
  },
  {
    name: 'Gaurav Poosarla',
    title: 'SDE-1 @ Samsung',
    text: 'With no prior knowledge of programming or DSA, the takeUforward channel was instrumental in my journey from beginner to landing my dream job as a Software Development Engineer. Their clear explanations and well-structured content made grasping crucia...'
  },
  {
    name: 'Prajwal Shah',
    title: 'SWE Intern @ Deutsche Bank',
    text: 'I was entirely new to the world of DSA and CP when I discovered Strivers channel. Strivers clear explanations ignited my passion for computer science, introducing me to core concepts like trees, graphs, and dynamic programming. Today, I stand as an...'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Discover the Success Stories of Our Students</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="profile-section">
              <FaUserCircle className="profile-icon" />
              <div className="name-title">
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <span className="testimonial-title">{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
