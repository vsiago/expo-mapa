import React, { useState } from 'react';
import './card.css';

export default function Card({ TipoDeArea, onAvaliacaoButtonClick }) {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (button) => {
    setActiveButton(button);
    onAvaliacaoButtonClick(TipoDeArea, button);
  };

  return (
    <div className={`cardContainer ${
      activeButton === 'muitoRuim' ? 'borderMuitoRuim' : '' ||
      activeButton === 'ruim' ? 'borderRuim' : '' ||
      activeButton === 'razoavel' ? 'borderRazoavel' : '' ||
      activeButton === 'bom' ? 'borderBom' : '' ||
      activeButton === 'muitoBom' ? 'borderMuitoBom' : ''
      }`}>
      <div className="titleCardContainer">
        <h3>{TipoDeArea}</h3>
      </div>

      <div
        onClick={() => handleButtonClick('muitoRuim')}
        className={`icon ${activeButton === 'muitoRuim' ? 'muitoRuimShow' : ''}`}
      >
        <img
          className={activeButton === 'muitoRuim' ? 'muitoRuimActive iconMuitoRuimActive' : ''}
          src="./img/iconsCaras/muitoRuimIcon.png"
          alt=""
        />
        <p className={activeButton === 'muitoRuim' ? 'TextMuitoRuimActive' : ''}>
          Muito ruim
        </p>
      </div>

      <div
        onClick={() => handleButtonClick('ruim')}
        className={`icon ${activeButton === 'ruim' ? 'ruimShow' : ''}`}
      >
        <img
          className={activeButton === 'ruim' ? 'ruimActive iconRuimActive' : ''}
          src="./img/iconsCaras/ruimIcon.png"
          alt=""
        />
        <p className={activeButton === 'ruim' ? 'TextRuimActive' : ''}>Ruim</p>
      </div>

      <div
        onClick={() => handleButtonClick('razoavel')}
        className={`icon ${activeButton === 'razoavel' ? 'razoavelShow' : ''}`}
      >
        <img
          className={activeButton === 'razoavel' ? 'razoavelActive iconRazoavelActive' : ''}
          src="./img/iconsCaras/razoavelIcon.png"
          alt=""
        />
        <p className={activeButton === 'razoavel' ? 'TextRazoavelActive' : ''}>Razoável</p>
      </div>

      <div
        onClick={() => handleButtonClick('bom')}
        className={`icon ${activeButton === 'bom' ? 'bomShow' : ''}`}
      >
        <img
          className={activeButton === 'bom' ? 'bomActive iconBomActive' : ''}
          src="./img/iconsCaras/bomIcon.png"
          alt=""
        />
        <p className={activeButton === 'bom' ? 'TextBomActive' : ''}>Bom</p>
      </div>

      <div
        onClick={() => handleButtonClick('muitoBom')}
        className={`icon ${activeButton === 'muitoBom' ? 'muitoBomShow' : ''}`}
      >
        <img
          className={activeButton === 'muitoBom' ? 'muitoBomActive iconMuitoBomActive' : ''}
          src="./img/iconsCaras/muitoBomIcon.png"
          alt=""
        />
        <p className={activeButton === 'muitoBom' ? 'TextMuitoBomActive' : ''}>
          Muito bom
        </p>
      </div>
    </div>
  );
}
``
