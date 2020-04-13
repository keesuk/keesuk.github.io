import React from 'react';
import * as Locations from './Locations';
import stateList from './stateList';
import MapGL, {Popup, Marker} from 'react-map-gl';
import styles from './App.module.css';
// import { csv } from 'd3';


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
            </Marker>
          ))
        }
      </MapGL>
    </div>
  );
};

export default App;