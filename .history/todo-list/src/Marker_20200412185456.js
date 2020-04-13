import {Marker} from 'react-map-gl';
import React from 'react';

export default function Marker({ latitude, longitude, zoom }) {
    
    return (
        <Marker
        latitude={latitude}
        longitude={longitude}
        zoom={zoom}
        />
    );
}

