// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

const Header = () => (
  <header className="header">
    <h1 className="logo">MyTutor</h1>

    <div className="nav">
      <div className="nav-link"><Link to="/home">Home</Link></div>
      <div className="nav-link"><Link to="/features">Features</Link></div>
      <div className="nav-link"><Link to="/contact">Contact</Link></div>
     
    </div>
  </header>
);

export default Header;
