import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">🐔</div>
        <h1>Roaster</h1>
      </div>
      <p className="tagline">Get roasted by the sassiest chicken on the web!</p>
    </header>
  );
};

export default Header; 