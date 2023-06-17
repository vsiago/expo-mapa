import React from 'react';
import './card.css';

export default function Card() {
  return (
    <div className="cardContainer">
      <div className="titleCardContainer">
        <h3>Segurança</h3>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/muitoRuimIcon.png" alt="" width={100} />
        <p>Muito ruim</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/ruimIcon.png" alt="" width={100} />
        <p>Ruim</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/razoavelIcon.png" alt="" width={100} />
        <p>Razoável</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/bomIcon.png" alt="" width={100} />
        <p>Bom</p>
      </div>
      <div className="icon">
        <img src="./img/iconsCaras/muitoBomIcon.png" alt="" width={100} />
        <p>Muito bom</p>
      </div>
    </div>
  );
}
