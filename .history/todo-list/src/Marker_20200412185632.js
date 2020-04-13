import { Marker } from 'react-map-gl';
import React from 'react';

export function Marker({ latitude, longitude, zoom }) {
    
    return (
        <Marker
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}
        />
    );
}

