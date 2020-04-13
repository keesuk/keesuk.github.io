import React from 'react';
import MapGL , {  NavigationControl, Marker } from 'react-map-gl';
import stateList from './Locations2';
import styles from './naviMarker.css'
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
            <div className={styles.Navi}>
                <NavigationControl />
            </div>
            
            {stateList.map((state, i) => (
                <Marker
                  key={i}
                  latitude={state.location[0]}
                  longitude={state.location[1]}
                >
                <button className=".button"/>
                </Marker>
                ))
            }
        {/* <DeckGL viewState={viewState} layers={Layers} /> */}
        </MapGL>
    );
}

