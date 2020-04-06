import React, {useState} from 'react';
import ReactMapGL from "react-map-gl"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.553305,
    longtitude: 126.972675,
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