import React from 'react';
import styles from './App.module.css';
import * as Locations from './Locations';
import Map from './Map';

const App = () => {
  return (
    <div>
      <Map width="100vw" height="100vh" />
    </div>
  );
};

export default App;