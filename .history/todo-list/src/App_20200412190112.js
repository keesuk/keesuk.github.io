import React from 'react';
import * as Locations from './Locations';
import Map from './Map';
import marker from './Marker'
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

  // const [libraries, setLibraries] = React.useState([]);
  // React.useEffect(() => {
  //   csv('public_libraries.csv', (d,id) => ({
  //     id,
  //     name: d['State'],
  //     postion: [+d['Longitude'], +d['Latitude']],
  //   }))
  //   .then(libraries =>
  //     libraries.filter(d => d.postion[0] != null && d.postion[1] != null)
  //   )
  //   .then(setLibraries);
  // }, []);
  // console.log(libraries);

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
            <Marker>
            <button key={key} onClick={() => handleFlyTo(Locations[key])}>
              {key}
            </button>
            </Marker>
          );
        })}
      </div>
      ))
      };
    </div>
  );
};

export default App;