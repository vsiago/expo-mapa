import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Mapa/Mapa';

import './home.css';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);
  
  const [estadoFilho, setEstadoFilho] = useState('');

  const atualizarEstadoFilho = (novoEstado) => {
    setEstadoFilho(novoEstado);
  };

  console.log(estadoFilho)

  return (
    <div className="home-container">
      <Header atualizarEstadoFilho={atualizarEstadoFilho} />
      <div className={`sombra ${estadoFilho ? 'sombraShow' : ''}`} style={{pointerEvents: !estadoFilho ? 'none' : 'auto'}}></div>
      <Map />
    </div>
  );
};

export default Home;
