import React from 'react';
import './avaliacao.css';
import { Link } from 'react-router-dom';

export default function Avaliacao() {
  return (
    <main className="avaliacao-container">
      <header>
        <h1 className="fade-in">
          <img
            className="logoExpo"
            src="./img/logo-expo-2023.svg"
            width={200}
            alt="Logo Expo 2023"
          />
        </h1>
        <h1 className="titleOpiniao">Dê sua opinião sobre a Expo</h1>
        <p className="subTitleOpniao">
          Sua resposta é muito importante para nós
        </p>
        <Link to="/home">
          <img className="btnVoltar" src="./img/btnVoltar.png" alt="" />
        </Link>
      </header>
      <section>
        <div className="cardsAvaliacao">
          <div className="cardSeguraca card"></div>
          <div className="cardAlimentacao card"></div>
          <div className="cardOrganizacao card"></div>
          <div className="cardAtracao card"></div>
        </div>
        <button className="btnEnviarAvaliacao">Enviar avaliação</button>
      </section>
      <footer>
        <img className="scLogos" src="../img/scLogos.png" alt="" />
      </footer>
    </main>
  );
}
