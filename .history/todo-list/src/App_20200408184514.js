import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.5666791,
    longitude: 126.9782914,
    width: "100vw",
    height: "100vh",
    zoom: 11
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <div calssName={StyleSheet.controls}>
          {Object.keys(Locations.map(key => {
            return <button key={key} onClick={undefined}>
              {key}
            </button>
          }))}
        </div>
      </ReactMapGL>
    </div>
  );
}