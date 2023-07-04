import React, { useState } from 'react';
import './avaliacao.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Cards/Card';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkRv8a8bgp7ccJbtQeObcpXvx2ZMX9K7w",
  authDomain: "expomapa2023.firebaseapp.com",
  projectId: "expomapa2023",
  storageBucket: "expomapa2023.appspot.com",
  messagingSenderId: "207041523524",
  appId: "1:207041523524:web:47d9135d91174801d7f111"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

export default function Avaliacao() {
  const [avaliacaoResultados, setAvaliacaoResultados] = useState({});
  const [exibirAlertas, setExibirAlertas] = useState(false);
  const [enviarAvaliacao, setEnviarAvaliacao] = useState(false);

  const handleAvaliacaoButtonClick = (tipoDeArea, button) => {
    setAvaliacaoResultados((prevResults) => ({
      ...prevResults,
      [tipoDeArea]: button,
    }));
  };

  const handleEnviarAvaliacaoClick = () => {
    if (
      avaliacaoResultados.Segurança === undefined ||
      avaliacaoResultados.Alimentação === undefined ||
      avaliacaoResultados.Organização === undefined ||
      avaliacaoResultados.Atrações === undefined
    ) {
      setExibirAlertas(true);
    } else {
      setExibirAlertas(false);
      setEnviarAvaliacao(true);
      console.log(avaliacaoResultados);
      const db = firebase.firestore();
      db.collection("avaliacoes")
        .add(avaliacaoResultados)
        .then(() => {
          setEnviarAvaliacao(true);
          console.log("Resultados da avaliação salvos no Firestore");
        })
        .catch((error) => {
          console.error("Erro ao salvar resultados da avaliação:", error);
        });
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
        {enviarAvaliacao ? (
          <Link to="/home">
            <img className="btnVoltar" src="./img/btnVoltar.png" alt="" />
          </Link>
        ) : (
          <>
            <h1 className="titleOpiniao">Dê sua opinião sobre a Expo</h1>
            <p className="subTitleOpniao">Sua resposta é muito importante para nós</p>
          </>
        )}
      </header>
      <section>
        {enviarAvaliacao ? (
          <p className="mensagemAgradecimento">Obrigado pela sua avaliação!</p>
        ) : (
          <div className="cardsAvaliacao">
            <div className="cardSeguraca card">
              <Card
                TipoDeArea="Segurança"
                onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
              />
              {exibirAlertas &&
                avaliacaoResultados.Segurança === undefined && (
                  <p className="alertaVisual">
                    Avalie a nossa <strong>segurança</strong>
                  </p>
                )}
            </div>
            <div className="cardAlimentacao card">
              <Card
                TipoDeArea="Alimentação"
                onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
              />
              {exibirAlertas &&
                avaliacaoResultados.Alimentação === undefined && (
                  <p className="alertaVisual">
                    Avalie a nossa <strong>alimentação</strong>
                  </p>
                )}
            </div>
            <div className="cardOrganizacao card">
              <Card
                TipoDeArea="Organização"
                onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
              />
              {exibirAlertas &&
                avaliacaoResultados.Organização === undefined && (
                  <p className="alertaVisual">
                    Avalie a nossa <strong>organização</strong>
                  </p>
                )}
            </div>
            <div className="cardAtracao card">
              <Card
                TipoDeArea="Atrações"
                onAvaliacaoButtonClick={handleAvaliacaoButtonClick}
              />
              {exibirAlertas &&
                avaliacaoResultados.Atrações === undefined && (
                  <p className="alertaVisual">
                    Avalie as nossas <strong>atrações</strong>
                  </p>
                )}
            </div>
          </div>
        )}
        {!enviarAvaliacao && (
          <button
            className="btnEnviarAvaliacao"
            onClick={handleEnviarAvaliacaoClick}
          >
            Enviar avaliação
          </button>
        )}
      </section>
      <footer>
        {/* <img className="scLogos" src="../img/scLogos.png" alt="" /> */}
      </footer>
    </main>
  );
}
