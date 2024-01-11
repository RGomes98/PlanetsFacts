import { useState, createContext, useContext as useReactContext } from 'react';

type Planets = 'MERCURY' | 'VENUS' | 'EARTH' | 'MARS' | 'JUPITER' | 'SATURN' | 'URANUS' | 'NEPTUNE';

type Context = {
  activePlanet: Planets;
  setActivePlanet: React.Dispatch<React.SetStateAction<Planets>>;
};

const Context = createContext({} as Context);

export const useContext = () => useReactContext(Context);

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [activePlanet, setActivePlanet] = useState<Planets>('EARTH');
  return <Context.Provider value={{ activePlanet, setActivePlanet }}>{children}</Context.Provider>;
};
