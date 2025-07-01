import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="home-header">
      <h2>Sample Header</h2>
      <div className="header-buttons">
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </div>
    </header>
  );
}

export default Header;