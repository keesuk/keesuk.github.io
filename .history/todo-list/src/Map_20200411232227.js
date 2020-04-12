import React from 'react';
import MapGL from 'react-map-gl';
import { DeckGL, Layer } from 'deck.gl';

export default function Map({ width, height, viewState, onViewStateChange }) {
    return (
        <MapGL
            width={width}
            height={height}
            viewState={viewState}
            onViewStateChange={onViewStateChange}
            mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
        />
            <DeckGL viewState={viewState} layers={Layers} />
    );
}