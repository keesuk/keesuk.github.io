import React from 'react';
import * as Locations from './Locations';
import stateList from './Locations2';
import MapGL, {Popup, Marker} from 'react-map-gl';
import styles from './App.module.css';
// import { csv } from 'd3';


const App = () => {
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
        mapStyle="mapbox://styles/keesukee/ck8qzf8td0par1ipce2409uf0"
      >
        {stateList.map((store, i) => (
          <Marker
          key={i}
          latitude={store.location[0]}
          longitude={store.location[1]}
          >
          <button
          className="btn-marker"
          />
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