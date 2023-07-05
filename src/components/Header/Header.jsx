import React from 'react';
import { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import buttonClickSound from '/sound/ui_tap-variant-01.wav';

export default function Header({ atualizarEstadoFilho }) {
  const [audio] = useState(new Audio(buttonClickSound));
  const [isOpen, setIsOpen] = useState(false);
  const [logoShow, setLogoHidden] = useState(true);
  const [navbarShow, setNavbarShow] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);


  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    atualizarEstadoFilho(!isOpen);
    toggleLogoHidden();
    ToggleNavbar();
  };

  const toggleLogoHidden = () => {
    setLogoHidden(!logoShow);
  };

  const ToggleNavbar = () => {
    setNavbarShow(!navbarShow);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    const button = event.target.dataset.button;
    setSelectedButton(button);
    // audio.play();
    // Outras ações quando o botão é clicado
  };

  console.log(selectedButton);


  useEffect(() => {
    switch (selectedButton) {
      case 'palco-laia':
          document.querySelector('img[src="' + '/img/PalcoLaia/laia-icon.png' + '"]').click();
          console.log('palco');
        break;
      case 'palco-quiva':
          document.querySelector('img[src="' + '/img/PalcoQuiva/quiva-icon.png' + '"]').click();
        break;
      case 'parque':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/Parque/parque-icon.png' + '"]').click();
          console.log('parque');
        }, 500);
        break;
      case 'rodeio':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/Rodeio/rodeio-icon.png' + '"]').click();
          console.log('rodeio');
        }, 500);
        break;
      case 'praca-alimentacao':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/PracaAlimentacao/alimentacao-icon.png' + '"]').click();
        }, 500);
        break;
      case 'camarote':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/CamaroteGreyGoose/grey-icon.png' + '"]').click();
        }, 500);
        break;
      case 'forro':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/MariaBonita/maria-icon.png' + '"]').click();
        }, 500);
        break;
      case 'educacao':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/ArenaEducacao/edu-icon.png' + '"]').click();
        }, 500);
        break;
      case 'cultura':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/ArenaCultural/cultural-icon.png' + '"]').click();
        }, 500);
        break;
      case 'fazendinha':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/Fazendinha/fazendinha-icon.png' + '"]').click();
        }, 500);
        break;
      case 'game':
        setTimeout(() => {
          document.querySelector('img[src="' + '/img/ArenaGame/game-icon.png' + '"]').click();
        }, 500);
        break;
      default:
        console.log('nenhum botão selecionado');
        break;
    }
  }, [selectedButton, setSelectedButton]);

  return (
    <header onClick={toggleMenu} className={`headerMain ${navbarShow ? 'headerMainBGShow' : ''}`}>
      <p className={`tourVirtual ${navbarShow ? 'tourVirtualPDelay' : ''}`}>{navbarShow ? '< arraste para os lados >' : 'explore locais'}</p>
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
            <a data-button="palco-laia" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Palco Laiá</p>
            </a>
          </li>
          <li>
            <a data-button="palco-quiva" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Palco Quiva</p>
            </a>
          </li>
          <li>
            <a data-button="parque" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Parque</p>
            </a>
          </li>
          <li>
            <a data-button="rodeio" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Rodeio</p>
            </a>
          </li>
          <li>
            <a id="praca-alimentacao" data-button="praca-alimentacao" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Praca de Alimentacao</p>
            </a>
          </li>
          <li>
            <a data-button="camarote" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Camarote</p>
            </a>
          </li>
          <li>
            <a data-button="forro" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Forró</p>
            </a>
          </li>
          <li>
            <a data-button="educacao" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Educação</p>
            </a>
          </li>
          <li>
            <a data-button="cultura" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Cultura</p>  
            </a>
          </li>
          <li>
            <a data-button="fazendinha" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Fazendinha</p>  
            </a>
          </li>
          <li>
            <a data-button="game" onClick={handleButtonClick}>
              <img src="./img/icon-location1.svg" alt="" />
              <p>Game</p>  
            </a>
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
