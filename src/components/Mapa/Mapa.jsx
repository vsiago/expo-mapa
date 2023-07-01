import React, { useEffect } from 'react';
import { MapContainer, ImageOverlay, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css';
import PinPalcoLaia from '../MarkerIcons/PinPalcoLaia';

// CONSTRUCAO DO MAPA BASEADO NA IMAGEM
const Map = () => {
  const imageUrl = './img/mapa.jpg';
  const imageBounds = [
    [-90, -360],
    [180, 360],
  ];
  const minZoom = 1.7;
  const maxZoom = 5;
  const initialZoom = 0;
  const centerLatitude = 0;
  const centerLongitude = 0;
  const mapMinBounds = [
    [-90, -180],
    [90, 180],
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
        <PinPalcoLaia latitude={'65.000'} longitude={'-80.000'} />
      </MapContainer>
    </div>
  );
};

export default Map;
