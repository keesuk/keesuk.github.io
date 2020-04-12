import React from 'react';
import * as Locations from './Locations';
import Map from './Map';
import styles from './App.module.css';
import { csv } from 'd3';


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
    csv('/data/서울안심먹거리목록정보.csv', (d,id) => ({
      id,
      name: d["업체명"],
      postion: [+d["X좌표"], +d["Y좌표"]],
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