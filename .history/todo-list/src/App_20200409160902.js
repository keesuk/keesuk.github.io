import React from 'react';
import styles from './App.module.css';
import Navigation from './Navigation';
import * as Locations from './Locations';
import Map from './Map';

const LINKS = [
  { label: 'Website', to: 'https://www.robinwieruch.de/' },
  { label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];
class App extends Component {
  render() {
    return (
      <div>
        <Navigation links={LINKS} />
      </div>
    );
  }
}

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