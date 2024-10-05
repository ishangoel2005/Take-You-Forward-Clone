import React from 'react';
import './Links.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Links = () => {
  return (
    <footer className="links-section">
      <div className="links-container">
        <div className="links-left">
          <h2>takeUforward</h2>
          <p>
            The best place to learn Data Structures, algorithms, most asked
            coding interview questions, and real interview experiences, free of
            cost.
          </p>
          <div className="social-icons">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>
        <div className="links-right">
          <div className="links-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Cancellation / Refund Policy</li>
            </ul>
          </div>
          <div className="links-column">
            <h4>Quick Access</h4>
            <ul>
              <li>Striver's DSA Sheet</li>
              <li>Striver's DSA Playlist</li>
              <li>CS Subjects</li>
              <li>Striver's CP Sheet</li>
            </ul>
          </div>
          <div className="links-column">
            <h4>DSA Sheets</h4>
            <ul>
              <li>Striver's SDE Sheet</li>
              <li>Striver's A2Z DSA Playlist</li>
              <li>SDE Core Sheet</li>
              <li>Striver's CP Sheet</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="links-copyright">
        Copyright © 2024 takeUforward | All rights reserved
      </p>
    </footer>
  );
}

export default Links;
