import React from 'react';
import styles from './App.module.css';
import Navigation from './Navigation';
import * as Locations from './Locations';
import Map from './Map';

const App = () => {
  const [viewState, setViewState] = React.useState(Locations.coolidge)
  const handleChangeViewState = ({ viewState }) => setViewState(viewState)

  const handleFlyTo = destination => {
    setViewState({ ...viewState, ...destination });
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