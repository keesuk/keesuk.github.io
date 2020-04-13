import React from 'react';
import * as Locations from './Locations';
import MapGL, {Popup, Marker} from 'react-map-gl';
import styles from './App.module.css';
import { DeckGL, GeoJsonLayer } from 'deck.gl';

import kangnamGeo from './data/kangnam.geojson';
import kangdongGeo from './data/kangdong.geojson';
import kangbukGeo from './data/kangbuk.geojson';
import kangseoGeo from './data/kangseo.geojson';
import kwanakGeo from './data/kwanak.geojson';
import kwangjinGeo from './data/kwangjin.geojson';
import kuroGeo from './data/kuro.geojson';
import keumcheonGeo from './data/keumcheon.geojson';
import nowonGeo from './data/nowon.geojson';
import dobongGeo from './data/dobong.geojson';
import dongdaemoonGeo from './data/dongdaemoon.geojson';
import dongjakGeo from './data/dongjak.geojson';
import mapoGeo from './data/mapo.geojson';
import seodaemoonGeo from './data/seodaemoon.geojson';
import seochoGeo from './data/seocho.geojson';
import seongdongGeo from './data/seongdong.geojson';
import seongbukGeo from './data/seongbuk.geojson';
import songpaGeo from './data/songpa.geojson';
import yangcheonGeo from './data/yangcheon.geojson';
import youngdeunpoGeo from './data/youngdeunpo.geojson';
import youngsanGeo from './data/youngsan.geojson';
import eunpyungGeo from './data/eunpyung.geojson';
import jongnoGeo from './data/jongno.geojson';
import jungGeo from './data/jung.geojson';
import jungrangGeo from './data/jungrang.geojson';

import CityPin from "./city-pin";

const stateList = [
  { name: '강남', location: [37.5177, 127.0473] },
  { name: '강동', location: [37.53, 127.1237] },
  { name: '강북', location: [37.6395, 127.0255] },
  { name: '강서', location: [37.5509, 126.8497] },
  { name: '관악', location: [37.4782, 126.9518] },
  { name: '광진', location: [37.5384, 127.0828] },
  { name: '구로', location: [37., 126.984450] },
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

  const layers = [
    new GeoJsonLayer({
      name: '강동구',
      id: '강동구',
      data: kangdongGeo,
      extruded: true,
      autoHighlight: true,
      getLineWidth: 1,
      onHover: ({object, x, y}) => {
      const tooltip = object.properties.name || object.properties.station;
    }
  })
  ];


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