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


  const toggleMenu = () => {
    setIsOpen(!isOpen);
    atualizarEstadoFilho(!isOpen);
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
    const button = event.target.dataset.button;
    setSelectedButton(button);
    audio.play();
    // Outras ações quando o botão é clicado
  };

  useEffect(() => {
    switch (selectedButton) {
      case 'palco-laia':
        // Lógica para o botão "Palco Laiá"
        const iconPalcoLaia = document.querySelector('img[src="' + '/img/PalcoLaia/laia-icon.png' + '"]');
        setTimeout(() => {
          iconPalcoLaia.click();
        }, 100);
        break;
      case 'palco-quiva':
        // Lógica para o botão "Palco Quiva"
        break;
      case 'parque':
        // Lógica para o botão "Parque"
        break;
      case 'rodeio':
        // Lógica para o botão "Rodeio"
        break;
      case 'praca-alimentacao':
        // Lógica para o botão "Praca de Alimentacao"
        const iconPracaAlimentacao = document.querySelector('img[src="' + '/img/PracaAlimentacao/alimentacao-icon.png' + '"]');
        setTimeout(() => {
          iconPracaAlimentacao.click();
        }, 100);
        break;
      case 'camarote':
        // Lógica para o botão "Camarote"
        break;
      case 'forro':
        // Lógica para o botão "Forró"
        break;
      case 'educacao':
        // Lógica para o botão "Educação"
        break;
      case 'cultura':
        // Lógica para o botão "Cultura"
        break;
      case 'fazendinha':
        // Lógica para o botão "Fazendinha"
        break;
      case 'game':
        // Lógica para o botão "Game"
        break;
      default:
        // Lógica padrão quando nenhum botão está selecionado
        break;
    }
  }, [selectedButton]);

  return (
    <header onClick={toggleMenu} className={`headerMain ${navbarShow ? 'headerMainBGShow' : ''}`}>
      <p className={`tourVirtual ${navbarShow ? 'tourVirtualPDelay' : ''}`}>{navbarShow ? '< arraste para o lado >' : 'explore locais'}</p>
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
            <a id="palco-laia" data-button="palco-laia" onClick={handleButtonClick}>Palco Laiá</a>
          </li>
          <li>
            <a id="palco-quiva" data-button="palco-quiva" onClick={handleButtonClick}>Palco Quiva</a>
          </li>
          <li>
            <a data-button="parque" onClick={handleButtonClick}>Parque</a>
          </li>
          <li>
            <a data-button="rodeio" onClick={handleButtonClick}>Rodeio</a>
          </li>
          <li>
            <a id="praca-alimentacao" data-button="praca-alimentacao" onClick={handleButtonClick}>Praca de Alimentacao</a>
          </li>
          <li>
            <a data-button="camarote" onClick={handleButtonClick}>Camarote</a>
          </li>
          <li>
            <a data-button="forro" onClick={handleButtonClick}>Forró</a>
          </li>
          <li>
            <a data-button="educacao" onClick={handleButtonClick}>Educação</a>
          </li>
          <li>
            <a data-button="cultura" onClick={handleButtonClick}>Cultura</a>
          </li>
          <li>
            <a data-button="fazendinha" onClick={handleButtonClick}>Fazendinha</a>
          </li>
          <li>
            <a data-button="game" onClick={handleButtonClick}>Game</a>
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
