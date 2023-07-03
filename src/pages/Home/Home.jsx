import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Mapa/Mapa';
import './home.css';
import { useMediaQuery } from 'react-responsive';



const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

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
      {isMobile ? (
        <>
          {/* <header>Header para celular</header> */}
          <div className={`sombra ${estadoFilho ? 'sombraShow' : ''}`} style={{pointerEvents: !estadoFilho ? 'none' : 'auto'}}></div>
        </>
      ) : (
        <Header id='headerEventNone' atualizarEstadoFilho={atualizarEstadoFilho} />
      )}
      <Map /> 
    </div>
  );
};

export default Home;