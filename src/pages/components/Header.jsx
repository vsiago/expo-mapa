import React from 'react';
import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoShow, setLogoHidden] = useState(true);
  const [navbarShow, setNavbarShow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleLogoHidden();
    ToggleNavbar();
  };

  const toggleLogoHidden = () => {
    setLogoHidden(!logoShow);
  };

  const ToggleNavbar = () => {
    setNavbarShow(!navbarShow);
  };

  return (
    <header>
      <nav className={`header ${isOpen ? 'open' : ''}`}>
        <img
          className="logo-expo"
          src="./img/logo-expo-2023.svg"
          alt="Logo Expo 2023"
        />
        <ul className={`navbar ${navbarShow ? 'navbarShow' : ''}`}>
          <li>
            <a href="">Rodeio</a>
          </li>
          <li>
            <a href="">Parque</a>
          </li>
          <li>
            <a href="">Praca de Alimentacao</a>
          </li>
          <li>
            <a href="">Shows</a>
          </li>
          <li>
            <a href="">Bem-estar</a>
          </li>
          <Link to="/avaliacao">
            <img
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
        <svg
          width="1822"
          height="118"
          viewBox="0 0 1822 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V14.6667C0 14.6667 376.847 34.7947 881.248 34.7947C1385.65 34.7947 1821.33 14.6667 1821.33 14.6667V0H0Z"
            fill="url(#paint0_radial_90_98)"
          />
          <path
            d="M591.816 32.1347H652.308C645.8 32.1 639.217 32.088 632.555 32.088C619.244 32.088 605.645 32.1347 591.816 32.1347ZM1169.07 32.1347H1229.52C1215.69 32.1347 1202.08 32.0894 1188.78 32.0894C1182.13 32.0894 1175.56 32.1014 1169.07 32.1347ZM861.805 87.2013C861.823 87.2413 861.841 87.2627 861.859 87.3027C863.125 89.1507 864.299 91.0173 865.42 92.9067C869.105 98.16 873.48 102.759 878.395 106.515C887.648 113.595 898.817 117.72 910.817 117.72C922.817 117.72 933.967 113.595 943.22 106.515C948.081 102.8 952.419 98.284 956.087 93.112C956.105 93.0706 956.143 93.0094 956.16 92.968C957.297 91.0587 958.491 89.1707 959.756 87.3027C959.775 87.2627 959.792 87.2413 959.811 87.2013C992.743 38.2547 1071.7 32.6454 1169.07 32.1347H652.308C749.713 32.6454 828.863 38.2613 861.805 87.2013Z"
            fill="url(#paint1_radial_90_98)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_90_98"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(893.844 52.8179) rotate(-63.8986) scale(1203.98 1203.98)"
            >
              <stop stop-color="#215CB1" />
              <stop offset="0.494975" stop-color="#1A4277" />
              <stop offset="1" stop-color="#142473" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_90_98"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(920.189 50.0587) rotate(-62.1045) scale(1330.82 1231.65)"
            >
              <stop stop-color="#215CB1" />
              <stop offset="0.494975" stop-color="#1A4277" />
              <stop offset="1" stop-color="#142473" />
            </radialGradient>
          </defs>
        </svg>
        <img
          className={`iconArrowDown ${navbarShow ? 'iconArrowUp' : ''}`}
          src="../img/double-arrow-down.png"
          alt=""
        />
      </div>
    </header>
  );
}
