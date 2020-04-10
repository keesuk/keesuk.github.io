import React from 'react'
import MapGL from 'react-map-gl';

export default function Map({ width, height, viewState, onViewStateChange }) {
    return (
        <MapGL
            width={width}
            height={height}
            viewState={viewState}
            onViewStateChange={onViewStateChange}
            mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
        />
    );
}