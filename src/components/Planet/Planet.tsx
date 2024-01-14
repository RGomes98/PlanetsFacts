import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { usePlanetDetails } from '../../hooks/usePlanetDetails';
import { usePlanetImages } from '../../hooks/usePlanetImages';
import { useContext } from '../../context/Context';
import { Heading } from './Heading/Heading';
import { Buttons } from './Buttons/Buttons';
import { Metrics } from './Metrics/Metrics';
import { Images } from './Images/Images';
import { Fragment } from 'react';

import styles from './Planet.module.scss';

export const Planet = () => {
  const { activePlanet, activeButton, planetsData } = useContext();
  const { getPlanetDetails } = usePlanetDetails();
  const { getPlanetImages } = usePlanetImages();

  const planet = planetsData.find(({ name }) => name.toUpperCase() === activePlanet);
  if (!planet) return null;

  const { name, rotation, revolution, radius, temperature, images } = planet;
  const { content, source } = getPlanetDetails(planet, activeButton);

  return (
    <Fragment>
      <MobileNavigation />
      <div className={`${styles.container} ${styles[activePlanet.toLowerCase()] || ''}`}>
        <div className={styles.wrapper}>
          <Images name={name} images={getPlanetImages(planet, images, activeButton)} />
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
