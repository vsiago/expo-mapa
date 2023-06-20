import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
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
    [-90, -180],
    [90, 180],
  ]; // Exemplo: limites da imagem do mundo inteiro
  const minZoom = 1;
  const maxZoom = 5;
  const initialZoom = 2;
  const centerLatitude = 0; // Exemplo: latitude do centro do mapa
  const centerLongitude = 0; // Exemplo: longitude do centro do mapa

  return (
    <MapContainer
      center={[centerLatitude, centerLongitude]}
      zoom={initialZoom}
      style={{ height: '100vh', width: '100vw' }}
    >
      <ZoomableImageOverlay
        imageUrl={imageUrl}
        imageBounds={imageBounds}
        minZoom={minZoom}
        maxZoom={maxZoom}
        initialZoom={initialZoom}
      />
    </MapContainer>
  );
};

export default Map;
