import React from 'react';
import * as Locations from './Locations';
import Map from './Map';
import styles from './App.module.css';
import { json } from 'd3';


const App = () => {
  const [viewState, setViewState] = React.useState(Locations.용산)
  const handleChangeViewState = ({ viewState }) => setViewState(viewState)

  const handleFlyTo = destination => {
    setViewState({
      ...viewState,
      ...destination,
    });
  }

  const [libraries, setLibraries] = React.useState([]);
  React.useEffect(() => {
    json('/data/seoul-dudream.json', (d,id) => ({
      id,
      state: d['name'],
      postion: [+d['lng'], +d['lat']],
    }))
    .then(libraries =>
      libraries.filter(d => d.postion[0] != null & d.postion[1] != null)
    )
    .then(setLibraries);
  }, []);
  console.log(libraries);

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