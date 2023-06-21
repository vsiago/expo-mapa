import React from 'react';
import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import buttonClickSound from '/sound/ui_tap-variant-01.wav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoShow, setLogoHidden] = useState(true);
  const [navbarShow, setNavbarShow] = useState(false);
  const [audio] = useState(new Audio(buttonClickSound));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleLogoHidden();
    ToggleNavbar();
    handleButtonClick();
  };

  const toggleLogoHidden = () => {
    setLogoHidden(!logoShow);
  };

  const ToggleNavbar = () => {
    setNavbarShow(!navbarShow);
  };

  const handleButtonClick = () => {
    audio.play();
    // Outras ações quando o botão é clicado
  };

  return (
    <header className="headerMain">
      <nav className={`header ${isOpen ? 'open' : ''}`}>
        <Link to="https://expo-mapa.vercel.app">
          <img
            className="logo-expo"
            src="./img/logo-expo-2023.svg"
            alt="Logo Expo 2023"
          />
        </Link>
        <ul className={`navbar ${navbarShow ? 'navbarShow' : ''}`}>
          <li>
            <a>Rodeio</a>
          </li>
          <li>
            <a>Parque</a>
          </li>
          <li>
            <a>Praca de Alimentacao</a>
          </li>
          <li>
            <a>Shows</a>
          </li>
          <li>
            <a>Bem-estar</a>
          </li>
          <Link to="/avaliacao">
            <img
              onClick={handleButtonClick}
              className="btnAvaliacao"
              src="./img/btnAvaliacao.png"
              alt="Botao Avaliacao"
            />
          </Link>
        </ul>
        <img
          className={`logo-prefeitura ${logoShow ? 'logoToggle' : ''}`}
          src="./img/logo-expo-2023-escura.png"
          alt="Logo Prefeitura 2023"
        />
      </nav>
      <div onClick={toggleMenu} className="btn-navbar">
        <img src="./img/btnNavbar.svg" alt="" />
        <img
          className={`iconArrowDown ${navbarShow ? 'iconArrowUp' : ''}`}
          src="../img/double-arrow-down.png"
          alt=""
        />
      </div>
    </header>
  );
}
