import React from 'react';
import * as Locations from './Locations';
import Map from './Map';
import styles from './App.module.css';
import { TransitionInterpolator, FlyToInterpolator } from 'react-map-gl';


const App = () => {
  const [viewState, setViewState] = React.useState(Locations.서울)
  const handleChangeViewState = ({ viewState }) => setViewState(viewState)

  const handleFlyTo = destination => {
    setViewState({
      ...viewState,
      ...destination,
      transitionDuration: 1000
      TransitionInterpolator: new FlyToInterpolator(),
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