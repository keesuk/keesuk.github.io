import React from 'react';
import * as Locations from './Locations';
import Map from './Map';
import styles from './App.module.css';
import { Marker } from 'react-map-gl';
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
      <Map
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
      />

      <div className={styles.controls}>
        {Object.keys(Locations).map(key => {
          return (
            <button key={key} onClick={() => handleFlyTo(Locations[key],Marker)}>
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;