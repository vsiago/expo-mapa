import React from 'react';
import { icon } from 'leaflet';
import MakerMuitoRuimIcon from '/img/iconsCaras/muitoRuimIcon.png';

const MarkerIcon = () => {

  const customMuitoRuimIcon = () =>
    icon({
      iconUrl: MakerMuitoRuimIcon,
      iconSize: [50, 50], // Defina o tamanho do ícone
    });
    
  const pinCoordinatesCarinhaVerde = ['15.000', '10.000'];
  const pinCoordinatesCarinhaAmarela = ['2.000', '160.000'];
  return {
    customMuitoRuimIcon,
    pinCoordinatesCarinhaVerde,
    pinCoordinatesCarinhaAmarela,
  };
};

export default MarkerIcon;
