import { Marker } from 'react-map-gl';
import React from 'react';

const Marker = ({ latitude, longitude}) => {
    
    return (
        <Marker
        latitude={latitude}
        longitude={longitude}
        />
    );
}

