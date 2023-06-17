import React from 'react';
import './card.css';
import { useState } from 'react';

export default function Card({ TipoDeArea }) {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="cardContainer">
      <div className="titleCardContainer">
        <h3>{TipoDeArea}</h3>
      </div>

      <div onClick={() => handleButtonClick('muitoRuim')} className="icon">
        <img
          className={
            activeButton === 'muitoRuim' ? 'muitoRuimActive iconRuimActive' : ''
          }
          src="./img/iconsCaras/muitoRuimIcon.png"
          alt=""
        />
        <p className={activeButton === 'muitoRuim' ? 'TextRuimActive' : ''}>
          Muito ruim
        </p>
      </div>

      <div className="icon">
        <img src="./img/iconsCaras/ruimIcon.png" alt="" />
        <p>Ruim</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/razoavelIcon.png" alt="" />
        <p>Razoável</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/bomIcon.png" alt="" />
        <p>Bom</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/muitoBomIcon.png" alt="" />
        <p>Muito bom</p>
      </div>
    </div>
  );
}
