import React, { useEffect } from 'react';
import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
  const maxZoom = 4;
  const initialZoom = 1;
  const centerLatitude = 0;
  const centerLongitude = 0;
  const mapMinBounds = [
    [-90, -180],
    [90, 180],
  ];

  const pinCoordinates = ['10.000', '10.000']; // Substitua latitude e longitude pelas coordenadas desejadas

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
        <Marker position={pinCoordinates}>
          <Popup>
            <h1>oi</h1>
            <button className="red-button">Botão</button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
