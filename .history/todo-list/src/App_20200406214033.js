import React, {useState} from 'react';
import ReactMapGL from "react-map-gl"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.532600,
    longtitude: 127.024612,
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
      markers here
    </ReactMapGL>
    </div>
  );
}