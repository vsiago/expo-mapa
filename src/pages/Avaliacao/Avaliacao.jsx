import React, { useState } from 'react';
import './avaliacao.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Cards/Card';

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
        </Link>):
        (
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
