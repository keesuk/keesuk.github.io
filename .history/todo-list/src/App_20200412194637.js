import React from 'react';
import * as Locations from './Locations';
import MapGL, {Popup, Marker} from 'react-map-gl';
import styles from './App.module.css';

import CityPin from "./city-pin";

const stateList = [
  { name: '강남', location: [37.565188, 126.983238] },
  { name: '강동', location: [37.564869, 126.984450] },
  { name: '강북', location: [37.562003, 126.985829] },
  { name: '강서', location: [37.564869, 126.984450] },
  { name: '관악', location: [37.564869, 126.984450] },
  { name: '광진', location: [37.562003, 126.985829] },
  { name: '구로', location: [37.564869, 126.984450] },
  { name: '금천', location: [37.564869, 126.984450] },
  { name: '노원', location: [37.562003, 126.985829] },
  { name: '도봉', location: [37.564869, 126.984450] },
  { name: '동대문', location: [37.564869, 126.984450] },
  { name: '동작', location: [37.562003, 126.985829] },
  { name: '마포', location: [37.564869, 126.984450] },
  { name: '서대문', location: [37.564869, 126.984450] },
  { name: '서초', location: [37.562003, 126.985829] },
  { name: '성동', location: [37.564869, 126.984450] },
  { name: '성북', location: [37.564869, 126.984450] },
  { name: '송파', location: [37.562003, 126.985829] },
  { name: '양천', location: [37.564869, 126.984450] },
  { name: '영등포', location: [37.564869, 126.984450] },
  { name: '용산', location: [37.562003, 126.985829] },
  { name: '은평', location: [37.564869, 126.984450] },
  { name: '종로', location: [37.562003, 126.985829] },
  { name: '중구', location: [37.564869, 126.984450] },
  { name: '중랑', location: [37.564869, 126.984450] }
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

  return (
    <div>
      <MapGL
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
        mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
      >
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