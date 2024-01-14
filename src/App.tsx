import { usePlanetFetch } from './hooks/usePlanetFetch';
import { Navbar } from './components/Navbar/Navbar';
import { Planet } from './components/Planet/Planet';
import { useContext } from './context/Context';
import { Fragment } from 'react';

import './stylesheets/globals.scss';

function App() {
  const { activePlanet } = useContext();
  usePlanetFetch();

  return (
    <Fragment>
      <Navbar />
      <Planet key={activePlanet} />
    </Fragment>
  );
}

export default App;
