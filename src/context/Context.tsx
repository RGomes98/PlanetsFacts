import { useState, createContext, useContext as useReactContext } from 'react';

const planets = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'] as const;
export type PlanetsOptions = Planets[number];
type Planets = typeof planets;

type Context = {
  planets: Planets;

  activePlanet: PlanetsOptions;
  setActivePlanet: React.Dispatch<React.SetStateAction<PlanetsOptions>>;

  isDropdownActive: boolean;
  setIsDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext({} as Context);

export const useContext = () => useReactContext(Context);

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [activePlanet, setActivePlanet] = useState<PlanetsOptions>('EARTH');
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <Context.Provider
      value={{ planets, activePlanet, setActivePlanet, isDropdownActive, setIsDropdownActive }}
    >
      {children}
    </Context.Provider>
  );
};
