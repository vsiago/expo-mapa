import React from 'react';
import { useState } from 'react';
import './header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoShow, setLogoHidden] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleLogoHidden();
  };

  const toggleLogoHidden = () => {
    setLogoHidden(!logoShow);
  };

  return (
    <header onClick={toggleMenu}>
      <nav className={`header ${isOpen ? 'open' : ''}`}>
        <img
          className="logo-expo"
          src="./img/logo-expo-2023.svg"
          alt="Logo Expo 2023"
        />
        <ul className="navbar">
          <li>
            <a href="">Shows</a>
          </li>
          <li>
            <a href="">Praca de Alimentacao</a>
          </li>
          <li>
            <a href="">Parque</a>
          </li>
        </ul>
        <img
          className={`logo-prefeitura ${logoShow ? 'logoToggle' : ''}`}
          src="./img/logo-prefeitura.svg"
          alt="Logo Prefeitura 2023"
        />
      </nav>
    </header>
  );
}
