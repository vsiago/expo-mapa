import React from 'react';
import './card.css';

export default function Card({ TipoDeArea }) {
  return (
    <div className="cardContainer">
      <div className="titleCardContainer">
        <h3>{TipoDeArea}</h3>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/muitoRuimIcon.png" alt="" />
        <p>Muito ruim</p>
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
