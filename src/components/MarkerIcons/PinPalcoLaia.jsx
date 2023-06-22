import React, { useState } from 'react';
import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/iconsCaras/muitoRuimIcon.png';
import './pinpalcolaia.css';

const PinPalcoLaia = ({ latitude, longitude }) => {
  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [50, 50], // Defina o tamanho do ícone
  });

  const coordPinPalcoLaia = [latitude, longitude];


  return (
    <Marker
      position={coordPinPalcoLaia}
      icon={customIconPalcoLaia}
    >
        <Popup autoPan={false} >
          <h1>Container 2</h1>
          <button>Botão</button>
        </Popup>
    </Marker>
  );
};

export default PinPalcoLaia;
