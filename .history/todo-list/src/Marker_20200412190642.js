import { Marker } from 'react-map-gl';
import React from 'react';


export function Mark({ latitude, longitude}) {
    
    return (
        <Marker
        latitude={latitude}
        longitude={longitude}
        />
    );
}

