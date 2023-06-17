import React from 'react';
import './avaliacao.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import buttonClickSound from '/sound/ui_tap-variant-01.wav';
import Card from '../../components/Cards/Card';

export default function Avaliacao() {
  const [audio] = useState(new Audio(buttonClickSound));

  const handleButtonClick = () => {
    audio.play();
    // Outras ações quando o botão é clicado
  };

  return (
    <main className="avaliacao-container">
      <header>
        <h1 className="fade-in">
          <img
            className="logoExpo"
            src="./img/logo-expo-2023.svg"
            width={180}
            alt="Logo Expo 2023"
          />
        </h1>
        <h1 className="titleOpiniao">Dê sua opinião sobre a Expo</h1>
        <p className="subTitleOpniao">
          Sua resposta é muito importante para nós
        </p>
        <Link to="/home">
          <img
            onClick={handleButtonClick}
            className="btnVoltar"
            src="./img/btnVoltar.png"
            alt=""
          />
        </Link>
      </header>
      <section>
        <div className="cardsAvaliacao">
          <div className="cardSeguraca card">
            <Card TipoDeArea={'Segurança'}/>
          </div>
          <div className="cardAlimentacao card">
            <Card TipoDeArea={'Alimentação'} />
          </div>
          <div className="cardOrganizacao card">
            <Card TipoDeArea={'Organização'} />
          </div>
          <div className="cardAtracao card">
            <Card TipoDeArea={'Atrações'} />
          </div>
        </div>
        <button className="btnEnviarAvaliacao">Enviar avaliação</button>
      </section>
      <footer>
        <img className="scLogos" src="../img/scLogos.png" alt="" />
      </footer>
    </main>
  );
}
