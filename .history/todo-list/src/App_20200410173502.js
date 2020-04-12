import React from 'react';
import './App.css';
import * as Locations from './Locations';
import Map from './Map';


const App = () => {
  const [viewState, setViewState] = React.useState(Locations.coolidge)
  const handleChangeViewState = ({ viewState }) => setViewState(viewState)

  const handleFlyTo = destination => {
    setViewState({ ...viewState, ...destination });
  }

  return (
    <div className="App">
      <Map
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
      />
      {Object.keys(Locations).map(key => {
        return (
          <button className="Btn" key={key} onClick={() => handleFlyTo(Locations[key])}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default App;