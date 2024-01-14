import {
  ButtonOptions,
  Geology,
  Images as ImageType,
  Planet as PlanetType,
  useContext,
} from '../../context/Context';

import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { Heading } from './Heading/Heading';
import { Buttons } from './Button/Buttons';
import { Images } from './Images/Images';
import { Metrics } from './Detail/Metrics';
import { Fragment } from 'react';

import styles from './Planet.module.scss';

export const Planet = () => {
  const { activePlanet, activeButton, planetsData } = useContext();

  const planet = planetsData.find(({ name }) => name.toUpperCase() === activePlanet);
  if (!planet) return null;

  const { name, rotation, revolution, radius, temperature, images } = planet;

  function getPlanetDetails(planet: PlanetType, activeButton: ButtonOptions) {
    const map: Record<ButtonOptions, Geology> = {
      OVERVIEW: planet['overview'],
      'INTERNAL STRUCTURE': planet['structure'],
      'SURFACE GEOLOGY': planet['geology'],
    };

    return map[activeButton];
  }

  function getPlanetImages(planet: PlanetType, activeButton: ButtonOptions) {
    return (Object.keys(images) as Array<keyof ImageType>)
      .filter((key) => {
        const map: Record<string, boolean> = {
          OVERVIEW: key === 'planet',
          'INTERNAL STRUCTURE': key === 'internal',
          'SURFACE GEOLOGY': key === 'planet' || key === 'geology',
        };

        return map[activeButton];
      })
      .map((key) => planet.images[key]);
  }

  const { content, source } = getPlanetDetails(planet, activeButton);
  const activeImages = getPlanetImages(planet, activeButton);

  return (
    <Fragment>
      <MobileNavigation />
      <div className={`${styles.container} ${styles[activePlanet.toLowerCase()] || ''}`}>
        <div className={styles.wrapper}>
          <Images name={name} images={activeImages} />
          <div className={styles.headingWrapper}>
            <Heading name={name} content={content} source={source} />
            <Buttons />
          </div>
        </div>
        <Metrics radius={radius} rotation={rotation} revolution={revolution} temperature={temperature} />
      </div>
    </Fragment>
  );
};
