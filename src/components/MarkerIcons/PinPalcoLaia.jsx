import React from 'react';
import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import pinPalcoLaiaIcon from '/img/iconsCaras/muitoRuimIcon.png';

const PinPalcoLaia = ({latitude, longitude}) => {
  const customIconPalcoLaia = icon({
    iconUrl: pinPalcoLaiaIcon,
    iconSize: [50, 50], // Defina o tamanho do ícone
  });

  const coordPinPalcoLaia = [latitude, longitude];

  return (
    <Marker position={coordPinPalcoLaia} icon={customIconPalcoLaia}>
      <Popup autoPan={true}>
        <h1>Container 2</h1>
        <button className="red-button">Botão</button>
      </Popup>
    </Marker>
  );
};

export default PinPalcoLaia;

// const customMuitoRuimIcon = () =>
// icon({
//   iconUrl: MakerMuitoRuimIcon,
//   iconSize: [50, 50], // Defina o tamanho do ícone
// });

// const coordMakerMuitoRuimIcon = ['15.000', '10.000'];
// return (
// <>
//   <Marker position={coordMakerMuitoRuimIcon} icon={customMuitoRuimIcon}>
//     <h1>Teste</h1>
//   </Marker>
// </>
// );
