import React from 'react';
import MapGL , { Marker, Popup, NavigationControl } from 'react-map-gl';
import * as Locations from './Locations';
import navistyles from './Navi.css'
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
    
    return (
        <MapGL
            width={width}
            height={height}
            viewState={viewState}
            onViewStateChange={onViewStateChange}
            mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
        >
        <div className="navi-control">
            <NavigationControl />
        </div>

            {
            Locations.map((i) => (
                <Marker
                    key={i}
                    latitude={store.location[0]}
                    longitude={store.location[1]}
                >
                    <button
                        className="btn-marker"
                    />
                </Marker>
            ))
            }
        </MapGL>
    );
}


            {/* <DeckGL viewState={viewState} layers={Layers} /> */}