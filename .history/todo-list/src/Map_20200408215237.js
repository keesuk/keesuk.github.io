import React from 'react'
import MapGL from 'react-map-gl';

export default function Map({ width, height, viewState, onViewStateChange }) {
    return (
        <MapGL
            {...viewport}
            mapboxApitAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            width={width}
            height={height}
            viewState={viewState}
            onViewStateChange={onViewStateChange}
        />
    );
}