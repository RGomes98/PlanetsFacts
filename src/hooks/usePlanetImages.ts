import type { Planet, Images, ButtonOptions } from '../context/Context';

function getPlanetFilter(key: keyof Images, activeButton: ButtonOptions) {
  const filterOptions: Record<string, boolean> = {
    OVERVIEW: key === 'planet',
    'INTERNAL STRUCTURE': key === 'internal',
    'SURFACE GEOLOGY': key === 'planet' || key === 'geology',
  };

  return filterOptions[activeButton];
}

export const usePlanetImages = () => {
  function getPlanetImages(planet: Planet, images: Images, activeButton: ButtonOptions) {
    return (Object.keys(images) as Array<keyof Images>)
      .filter((key) => getPlanetFilter(key, activeButton))
      .map((key) => planet.images[key]);
  }

  return { getPlanetImages };
};
