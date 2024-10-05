import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Community.css';

const Community = () => {
  return (
    <section className="community">
      <h2>Connect with Our Community</h2>
      <div className="community-stats">
        <div className="outer-box">
          <div className="inner-box">
            <div className="stat-box">
              <p className="number">530K+</p>
              <div className="social-info">
                <span className="social-name">YouTube</span>
                <FaYoutube className="social-icon youtube" />
              </div>
            </div>
          </div>
        </div>

        <div className="outer-box">
          <div className="inner-box">
            <div className="stat-box">
              <p className="number">120K+</p>
              <div className="social-info">
                <span className="social-name">Twitter</span>
                <FaTwitter className="social-icon twitter" />
              </div>
            </div>
          </div>
        </div>

        <div className="outer-box">
          <div className="inner-box">
            <div className="stat-box">
              <p className="number">120K+</p>
              <div className="social-info">
                <span className="social-name">Instagram</span>
                <FaInstagram className="social-icon instagram" />
              </div>
            </div>
          </div>
        </div>

        <div className="outer-box">
          <div className="inner-box">
            <div className="stat-box">
              <p className="number">560K+</p>
              <div className="social-info">
                <span className="social-name">LinkedIn</span>
                <FaLinkedin className="social-icon linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
