import { Marker } from 'react-map-gl';
import React from 'react';

export function marker({ latitude, longitude}) {
    
    return (
        <Marker
        latitude={latitude}
        longitude={longitude}
        />
    );
}

