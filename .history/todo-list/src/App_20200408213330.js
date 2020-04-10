import React from 'react';
import styles from './App.module.css';
import * as Locations from './Locations';
import Map from './Map';

const App = () => {
  const [viewState, setViewState] = React.useState(Locations.coolidge)
  const handleChangeViewState = ({ viewState }) => setViewState(viewState)
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
          return <button key={key} onClick={undefined}>
            {key}
          </button>
        }
      </div>
    </div>
  );
};

export default App;