import { useState, createContext, useContext as useReactContext } from 'react';

const planets = ['MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE'] as const;
const buttons = ['OVERVIEW', 'INTERNAL STRUCTURE', 'SURFACE GEOLOGY'] as const;

export type PlanetOptions = Planets[number];
type Planets = typeof planets;

export type ButtonOptions = Buttons[number];
type Buttons = typeof buttons;

export type Images = { planet: string; internal: string; geology: string };
export type Geology = { content: string; source: string };

export type Planet = {
  name: string;
  overview: Geology;
  structure: Geology;
  geology: Geology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
};

type Context = {
  planets: Planets;
  buttons: Buttons;

  activeButton: ButtonOptions;
  setActiveButton: React.Dispatch<React.SetStateAction<ButtonOptions>>;

  activePlanet: PlanetOptions;
  setActivePlanet: React.Dispatch<React.SetStateAction<PlanetOptions>>;

  isDropdownActive: boolean;
  setIsDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;

  planetsData: Planet[];
  setPlanetsData: React.Dispatch<React.SetStateAction<Planet[]>>;
};

const Context = createContext({} as Context);

export const useContext = () => useReactContext(Context);

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [activeButton, setActiveButton] = useState<ButtonOptions>('OVERVIEW');
  const [activePlanet, setActivePlanet] = useState<PlanetOptions>('EARTH');
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [planetsData, setPlanetsData] = useState<Planet[]>([]);

  return (
    <Context.Provider
      value={{
        planets,
        buttons,
        activeButton,
        setActiveButton,
        activePlanet,
        setActivePlanet,
        isDropdownActive,
        setIsDropdownActive,
        planetsData,
        setPlanetsData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
