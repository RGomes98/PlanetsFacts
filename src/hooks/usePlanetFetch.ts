import { useContext } from '../context/Context';
import { useEffect } from 'react';

export const usePlanetFetch = () => {
  const { setPlanetsData } = useContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/data/planets.json');
        const data = await response.json();

        setPlanetsData(data);
      } catch (error: unknown) {
        if (error instanceof Error) console.error(error.message);
      }
    })();
  }, [setPlanetsData]);
};
