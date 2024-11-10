'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__title">
        <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <span className="highlight">Uneeza</span>Ismail
      </div>

      <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar__item">
          <Link href="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className="navbar__item">
          <Link href="/components/about" onClick={closeMenu}>About</Link>
        </li>
        <li className="navbar__item">
          <Link href="/components/project" onClick={closeMenu}>Projects</Link>
        </li>
      </ul>

      <div className={`close-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <FaTimes />
      </div>
      
      <button className="navbar__button" onClick={closeMenu}>
        <Link href="/components/contact">Contact</Link>
      </button>
    </header>
  );
};

export default Header;
