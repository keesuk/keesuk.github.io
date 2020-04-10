import React from 'react'
import MapGL from 'react-map-gl';

export default function Map({ width, height, viewState, }) {
    return <MapGL width={width} height={height} />;
}