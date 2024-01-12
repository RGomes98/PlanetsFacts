import { useContext } from '../context/Context';
import { useEffect, useState } from 'react';

type Statuses = 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';

export const usePlanetFetch = () => {
  const [status, setStatus] = useState<Statuses>('IDLE');
  const { setPlanetsData } = useContext();

  useEffect(() => {
    (async () => {
      setStatus('LOADING');

      try {
        const response = await fetch('/data/planets.json');
        const data = await response.json();

        setStatus('SUCCESS');
        setPlanetsData(data);
      } catch (error: unknown) {
        setStatus('ERROR');
        if (error instanceof Error) console.error(error.message);
      } finally {
        setStatus('IDLE');
      }
    })();
  }, [setPlanetsData]);

  return { status };
};
