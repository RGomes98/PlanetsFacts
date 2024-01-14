import type { Planet, Geology, ButtonOptions } from '../context/Context';

export const usePlanetDetails = () => {
  function getPlanetDetails(planet: Planet, activeButton: ButtonOptions) {
    const detailOptions: Record<ButtonOptions, Geology> = {
      OVERVIEW: planet['overview'],
      'INTERNAL STRUCTURE': planet['structure'],
      'SURFACE GEOLOGY': planet['geology'],
    };

    return detailOptions[activeButton];
  }

  return { getPlanetDetails };
};
