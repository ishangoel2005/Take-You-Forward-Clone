import React from 'react';
import './Services.css';

const services = [
  {
    title: "Striver's DSA Sheet",
    description: "Boost your DSA skills with our handy cheat sheets.",
    icon: '📘',
  },
  {
    title: 'System Design',
    description: 'Design better systems with our simplified approach.',
    icon: '🖥️',
  },
  {
    title: 'Technical Blogs',
    description: 'Dive Deep into Tech Innovation with Our Engaging Blogs.',
    icon: '📝',
  },
  {
    title: "Striver's DSA Playlist",
    description: 'Master algorithms with our curated DSA playlist.',
    icon: '🎥',
  },
  {
    title: 'CS Subjects',
    description: 'Demystify CS topics with our easy-to-understand guides.',
    icon: '📚',
  },
  {
    title: "Striver's CP Sheet",
    description: 'Level up your coding game with our practice resources.',
    icon: '⚙️',
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Explore Our Resources</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="try-free-btn">Try it Free</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
