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
    <div>
      <Map
        width="100vw"
        height="100vh"
        viewState={viewState}
        onViewStateChange={handleChangeViewState}
      />
      <div className="App">
        {Object.keys(Locations).map(key => {
          return (
            <Button key={key} onClick={() => handleFlyTo(Locations[key])}>
              {key}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default App;