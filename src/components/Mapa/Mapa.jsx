import React, { useEffect } from 'react';
import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css';
import { icon } from 'leaflet';
import iconeBom from '/img/iconsCaras/bomIcon.png';
import iconeRuim from '/img/iconsCaras/ruimIcon.png';

const customIconBom = icon({
  iconUrl: iconeBom,
  iconSize: [50, 50], // Defina o tamanho do ícone
});

const customIconRuim = icon({
  iconUrl: iconeRuim,
  iconSize: [50, 50], // Defina o tamanho do ícone
});

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

const Map = () => {
  const imageUrl = './img/mapa-expo.png';
  const imageBounds = [
    [-90, -260],
    [180, 260],
  ];
  const minZoom = 2;
  const maxZoom = 3;
  const initialZoom = 1;
  const centerLatitude = 0;
  const centerLongitude = 0;
  const mapMinBounds = [
    [-90, -180],
    [90, 180],
  ];

  const pinCoordinatesCarinhaVerde = ['20.900', '19.000'];
  const pinCoordinatesCarinhaAmarela = ['2.000', '160.000'];

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <MapContainer
        center={[centerLatitude, centerLongitude]}
        zoom={initialZoom}
        style={{ height: '100%', width: '100%' }}
        maxBounds={mapMinBounds}
        maxBoundsViscosity={1.0}
      >
        <h1>Ola</h1>
        <ZoomableImageOverlay
          imageUrl={imageUrl}
          imageBounds={imageBounds}
          minZoom={minZoom}
          maxZoom={maxZoom}
          initialZoom={initialZoom}
        />
        <Marker position={pinCoordinatesCarinhaVerde} icon={customIconBom}>
          <Popup autoPan={true}>
            <h1>Container 1</h1>
            <button className="red-button">Botão</button>
          </Popup>
        </Marker>
        <Marker position={pinCoordinatesCarinhaAmarela} icon={customIconRuim}>
          <Popup autoPan={true}>
            <h1>Container 2</h1>
            <button className="red-button">Botão</button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
