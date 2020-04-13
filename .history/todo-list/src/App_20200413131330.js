import React from 'react';
import * as Locations from './Locations';
import MapGL, { Marker } from 'react-map-gl';
import { DeckGL, GeoJsonLayer, ArcLayer } from 'deck.gl';

import suGeoData from './data/seoul.geojson';
// import suDuData from './data/seoul_dudream.json';

import styles from './App.module.css';
import CityPin from "./city-pin";



const App = () => {
  const REACT_APP_MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2Vlc3VrZWUiLCJhIjoiY2s4bzdiMjJ0MDN6aTNkc2s5YnNia3ZkcCJ9.pjuEmhEPr73pfhJgcXmOqg'
  const [viewState, setViewState] = React.useState(Locations.용산)
  const handleChangeViewState = ({ viewState }) => setViewState(viewState)

  const handleFlyTo = destination => {
    setViewState({
      ...viewState,
      ...destination,
    });
  }
  
  const layers = [
    new GeoJsonLayer({
      name: '서울',
      id: '서울',
      data: suGeoData,
      getFillColor: [0, 0, 0],
      pickable: true,
      stroked: true,
      filled: true,
  })
  ];

  // const layer = [
  //   new ArcLayer({
  //   id: 'arc-layer',
  //   data: suDuData,
  //   pickable: true,
  //   getWidth: 12,
  //   getSourcePosition: d => d[0].coordinates ,
  //   getTargetPosition: d => d[1].coordinates ,
  //   getSourceColor: [0, 255, 0],
  //   getTargetColor: [0, 200, 200],
  //   })
  // ];

  return (
    <div>
      <div className={styles.title}>
        내가 본 서울시
      </div>

      <MapGL
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
      >
        <DeckGL viewState={viewState} layers={layers} />
        {/* <DeckGL viewState={viewState} layer={layer} /> */}

        {stateList.map((state, i) => (
            <Marker
              key={i}
              latitude={state.location[0]}
              longitude={state.location[1]}
            >
              <CityPin size={20}  />
            </Marker>
          ))
        }
      </MapGL>

      <div className={styles.controls}>
        {Object.keys(Locations).map(key => {
          return (
            <button key={key} onClick={() => handleFlyTo(Locations[key])}>
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;


// onClick={() => this.setState({ popupInfo: city })}