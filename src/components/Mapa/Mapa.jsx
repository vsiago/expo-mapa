import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css';
import PinPalcoLaia from '../MarkerIcons/PinPalcoLaia';
import PinPalcoQuiva from '../MarkerIcons/PinPalcoQuiva';
import PinCamaroteGreyGoose from '../MarkerIcons/PinGreyGoose';
import PinRodeio from '../MarkerIcons/PinRodeio';
import PinParque from '../MarkerIcons/PinParque';
import PinFazendinha from '../MarkerIcons/PinFazendinha';
import PinArenaGame from '../MarkerIcons/PinArenaGame';
import PinArenaEducacao from '../MarkerIcons/PinArenaEducacao';
import PinPracaAlimentacao from '../MarkerIcons/PinAlimentacao';
import PinMariaBonita from '../MarkerIcons/PinMariaBonita';
import PinArenaCultural from '../MarkerIcons/PinArenaCultural';

// CONSTRUCAO DO MAPA BASEADO NA IMAGEM
const Map = () => {
  const imageUrl = 'https://res.cloudinary.com/dbjzaupe7/image/upload/v1688479819/expo-mapa/mapa_2_op1asu.jpg';
  const imageBounds = [
    [-90, -360],
    [180, 360],
  ];
  const minZoom = 1.6;
  const maxZoom = 1.6;
  const initialZoom = minZoom;
  const centerLatitude = 0;
  const centerLongitude = 0;
  const mapMinBounds = [
    [-90, -280],
    [90, 280],
  ];

  const ZoomableImageOverlay = ({
    imageUrl,
    imageBounds,
    minZoom,
    maxZoom,
    initialZoom,
  }) => {
    const map = useMap();

    useEffect(() => {
      map.setMinZoom(minZoom);
      map.setMaxZoom(maxZoom);
      map.setZoom(initialZoom);
    }, [map, minZoom, maxZoom, initialZoom]);

    return <ImageOverlay url={imageUrl} bounds={imageBounds} />;
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <MapContainer
        center={[centerLatitude, centerLongitude]}
        zoom={initialZoom}
        style={{ height: '100%', width: '100%' }}
        maxBounds={mapMinBounds}
        maxBoundsViscosity={1.0}
      >
        <ZoomableImageOverlay
          imageUrl={imageUrl}
          imageBounds={imageBounds}
          minZoom={minZoom}
          maxZoom={maxZoom}
          initialZoom={initialZoom}
        />
        <PinPalcoLaia className='pin-palco-laia' latitude={'65.000'} longitude={'-80.000'} />
        <PinCamaroteGreyGoose latitude={'46.000'} longitude={'-70.000'} />
        <PinParque latitude={'32.000'} longitude={'105.000'} />
        <PinPracaAlimentacao latitude={'-26.000'} longitude={'55.000'} />
        <PinArenaGame latitude={'-15.000'} longitude={'136.000'} />
        <PinArenaEducacao latitude={'-39.000'} longitude={'170.000'} />
        <PinArenaCultural latitude={'-63.000'} longitude={'135.000'} />
        <PinFazendinha latitude={'-60.000'} longitude={'-135.000'} />
        <PinRodeio latitude={'36.000'} longitude={'-110.000'} />
        {/* <PinCamaroteGreyGoose latitude={'70.000'} longitude={'-30.000'} /> */}
        <PinPalcoQuiva latitude={'-77.000'} longitude={'104.000'} />
        <PinMariaBonita latitude={'6.000'} longitude={'-89.000'} />
      </MapContainer>
    </div>
  );
};

export default Map;
