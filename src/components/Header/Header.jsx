import React from 'react';
import { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import buttonClickSound from '/sound/ui_tap-variant-01.wav';

export default function Header({atualizarEstadoFilho}) {
  const [audio] = useState(new Audio(buttonClickSound));
  const [isOpen, setIsOpen] = useState(false);
  const [logoShow, setLogoHidden] = useState(true);
  const [navbarShow, setNavbarShow] = useState(false);

  useEffect(() => {
    const pracaAlimentacao = document.querySelector('#praca-alimentacao');
  
    const handleClick = () => {
      const caminhoIMG = '/img/PracaAlimentacao/alimentacao-icon.png';
      const iconPracaAlimentacao = document.querySelector('img[src="' + caminhoIMG + '"]');
      setTimeout(() => {
        iconPracaAlimentacao.click();
      },100)
    };
  
    pracaAlimentacao.addEventListener('click', handleClick);
  
    return () => {
      pracaAlimentacao.removeEventListener('click', handleClick);
    };
  }, []);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    atualizarEstadoFilho(!isOpen)
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
    <header onClick={toggleMenu} className={`headerMain ${navbarShow ? 'headerMainBGShow' : ''}`}>
        <p className={`tourVirtual ${navbarShow ? 'tourVirtualPDelay' : ''}`}>{navbarShow ? 'explore locais' : 'Tour Virtual'}</p>
      <nav className={`header ${isOpen ? 'open' : ''}`}>
        <Link to="./">
          <img
            className="logo-expo"
            src="./img/logo-expo-2023.svg"
            alt="Logo Expo 2023"
          />
        </Link>
        <ul className={`navbar ${navbarShow ? 'navbarShow' : ''}`}>
          <li>
            <a id='palco-principal'>Palco Laiá</a>
          </li>
          <li>
            <a>Palco Quiva</a>
          </li>
          <li>
            <a>Parque</a>
          </li>
          <li>
            <a>Rodeio</a>
          </li>
          <li>
            <a id='praca-alimentacao'>Praca de Alimentacao</a>
          </li>
          <li>
            <a>Camarote</a>
          </li>
          <li>
            <a>Forró</a>
          </li>
          <li>
            <a>Educação</a>
          </li>
          <li>
            <a>Cultura</a>
          </li>
          <li>
            <a>Fazendinha</a>
          </li>
          <li>
            <a>Game</a>
          </li>
        </ul>
        <Link to="/avaliacao">
            <img
              onClick={handleButtonClick}
              className="btnAvaliacao"
              src="./img/btnAvaliacao.png"
              alt="Botao Avaliacao"
            />
          </Link>
        <img
          className={`logo-prefeitura ${logoShow ? 'logoToggle' : ''}`}
          src="./img/logo-expo-2023-escura.png"
          alt="Logo Prefeitura 2023"
        />
      </nav>
      <div className="btn-navbar">
        <img
          onClick={toggleMenu}
          className={`iconArrowDown ${navbarShow ? 'iconArrowUp' : ''}`}
          src="../img/double-arrow-down.png"
          alt=""
        />
        <img src="./img/btnNavbar.svg" alt="" />
      </div>
    </header>
  );
}
