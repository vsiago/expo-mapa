import React, { useState } from 'react';
import './avaliacao.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Cards/Card';

export default function Avaliacao() {
  const [avaliacaoResultados, setAvaliacaoResultados] = useState({});

  const handleAvaliacaoButtonClick = (tipoDeArea, button) => {
    setAvaliacaoResultados((prevResults) => ({
      ...prevResults,
      [tipoDeArea]: button,
    }));
  };

  const handleEnviarAvaliacaoClick = () => {
    if(avaliacaoResultados.Segurança === undefined) {
     console.log('Avalie a nossa seguranca');
    }
    if(avaliacaoResultados.Alimentação === undefined) {
     console.log('Avalie a nossa alimentacao');
    }
    if(avaliacaoResultados.Organização === undefined) {
      console.log('Avalie a nossa organização');
     }
     if(avaliacaoResultados.Atrações === undefined) {
      console.log('Avalie as nossas atrações');
     }
     if(avaliacaoResultados.Segurança &&
        avaliacaoResultados.Alimentação &&
        avaliacaoResultados.Organização &&
        avaliacaoResultados.Atrações ) {
          console.log(avaliacaoResultados);
     }
  };

  return (
    <main className="avaliacao-container">
      <header>
        <h1 className="fade-in">
          <img
            className="logoExpo"
            src="./img/logo-expo-2023.svg"
            alt="Logo Expo 2023"
          />
        </h1>
        <h1 className="titleOpiniao">Dê sua opinião sobre a Expo</h1>
        <p className="subTitleOpniao">Sua resposta é muito importante para nós</p>
        <Link to="/home">
          <img
            className="btnVoltar"
            src="./img/btnVoltar.png"
            alt=""
          />
        </Link>
      </header>
      <section>
        <div className="cardsAvaliacao">
          <div className="cardSeguraca card">
            <Card
              TipoDeArea="Segurança"
              onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
            />
          </div>
          <div className="cardAlimentacao card">
            <Card
              TipoDeArea="Alimentação"
              onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
            />
          </div>
          <div className="cardOrganizacao card">
            <Card
              TipoDeArea="Organização"
              onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
            />
          </div>
          <div className="cardAtracao card">
            <Card
              TipoDeArea="Atrações"
              onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
            />
          </div>
        </div>
        <button className="btnEnviarAvaliacao" onClick={handleEnviarAvaliacaoClick}>
          Enviar avaliação
        </button>
      </section>
      <footer>
        <img className="scLogos" src="../img/scLogos.png" alt="" />
      </footer>
    </main>
  );
}
