import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <nav className="navbar">
          <img src="./img/logo-expo-2023.svg" alt="" />
          <ul>
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
          <img src="./img/logo-prefeitura.svg" alt="" />
        </nav>
      </header>
    </div>
  );
};

export default Home;
