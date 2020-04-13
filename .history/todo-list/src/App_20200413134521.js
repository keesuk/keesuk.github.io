import React from 'react';
import * as Locations from './Locations';
import MapGL, { Marker } from 'react-map-gl';
import { DeckGL, GeoJsonLayer, ArcLayer } from 'deck.gl';

import suGeoData from './data/seoul.geojson';
// import suDuData from './data/seoul_dudream.json';

import styles from './App.module.css';
import CityPin from "./city-pin";

const stateList = [
  { name: '강남', location: [37.5177, 127.0473] },
  { name: '강동', location: [37.53, 127.1237] },
  { name: '강북', location: [37.6395, 127.0255] },
  { name: '강서', location: [37.5509, 126.8497] },
  { name: '관악', location: [37.4782, 126.9518] },
  { name: '광진', location: [37.5384, 127.0828] },
  { name: '구로', location: [37.4951999, 126.8877] },
  { name: '금천', location: [37.4565, 126.8954] },
  { name: '노원', location: [37.654, 126.0567] },
  { name: '도봉', location: [37.0466, 127.009811] },
  { name: '동대문', location: [37.5712838, 127.0089811] },
  { name: '동작', location: [37.5120999, 126.9395] },
  { name: '마포', location: [37.566571, 126.9015317] },
  { name: '서대문', location: [37.5657953, 126.9666351] },
  { name: '서초', location: [37.4835, 127.0365] },
  { name: '성동', location: [37.5635, 127.0365] },
  { name: '성북', location: [37.59, 127.0165] },
  { name: '송파', location: [37.5145, 127.1058] },
  { name: '양천', location: [37.5171, 126.8663] },
  { name: '영등포', location: [37.5262, 126.8959] },
  { name: '용산', location: [37.5323, 126.99] },
  { name: '은평', location: [37.5541369, 126.97088] },
  { name: '종로', location: [37.5702103, 126.9772401] },
  { name: '중구', location: [37.5636559, 126.9975097] },
  { name: '중랑', location: [37.5949548, 127.0763183] }
]

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
  
  // const layers = [
  //   new GeoJsonLayer({
  //     name: '서울',
  //     id: '서울',
  //     data: suGeoData,
  //     getFillColor: [0, 0, 0],
  //     pickable: true,
  //     stroked: true,
  //     filled: true,
  // })
  // ];

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