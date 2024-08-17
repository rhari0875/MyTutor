import React from 'react';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>FlashCards</li>
            <li>Summarization</li>
            <li>Quiz</li>
            
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Referral</li>
            <li>Live</li>
            <li>Login</li>
            <li>Sign-up</li>
            <li>Study Material</li>
            <li>Practically School Solution</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Brochure</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>News & Awards</li>
            <li>FAQs</li>
            <li>Need Help?</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a className="footer-link" href="https://github.com/rhari0875">GitHub</a>
          <a className="footer-link" href="https://instagram.com/hari_.0708">Instagram</a>
          <a className="footer-link" href="https://www.linkedin.com/in/hari-govindh-a326a5255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkuqKcyvCQ%2FWhnjYq%2FtF%2FxA%3D%3D">LinkedIn</a>
        </div>
        <div className="legal-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <p>© 2024 MyTutor. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
