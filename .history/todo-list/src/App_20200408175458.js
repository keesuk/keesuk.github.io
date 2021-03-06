import React, {useState} from 'react';
import ReactMapGL from "react-map-gl"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.5666791,
    longitude: 126.9782914,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })
  return (
  <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      
    </ReactMapGL>
    </div>
  );
}