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

  const [popupOpen, setPopupOpen] = useState(false);

  const onClose = () => {
    setPopupOpen(false);
  };

  const onMarkerClick = () => {
    setPopupOpen(true);
  };

  return (
    <Marker
      position={coordPinPalcoLaia}
      icon={customIconPalcoLaia}
      eventHandlers={{ click: onMarkerClick }}
    >
      {popupOpen && (
        <Popup autoPan={false} onClose={onClose}>
          <h1>Container 2</h1>
          <button onClick={onClose}>Botão</button>
        </Popup>
      )}
    </Marker>
  );
};

export default PinPalcoLaia;
