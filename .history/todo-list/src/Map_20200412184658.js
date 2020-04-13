import React from 'react';
import MapGL , { Marker } from 'react-map-gl';
import WebMercatorViewport from '@math.gl/web-mercator';
// import styles from './naviMarker.css'
// import { DeckGL, Layer, ScatterplotLayer } from 'deck.gl';

export default function Map({ width, height, viewState, onViewStateChange }) {
    
    // const Layers = [
    //     new ScatterplotLayer({
    //         id: 'scatterplot-layer',
    //         data: libraries,
    //         getRadius: 500 * radius,
    //         radiusMaxPixels: 15,
    //         getFillColor: [255, 99, 71],
    //     }),
    // ];
    
    
    return new WebMercatorViewport(
        <MapGL
            width={width}
            height={height}
            viewState={viewState}
            onViewStateChange={onViewStateChange}
            mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
        >

        <Marker>latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
        {/* <DeckGL viewState={viewState} layers={Layers} /> */}
        </MapGL>
    );
}

