import { Fragment } from 'react';
import {
  ButtonOptions,
  Geology,
  Images as ImageType,
  Planet as PlanetType,
  useContext,
} from '../../context/Context';
import { Button } from './Button/Button';
import { Detail } from './Detail/Detail';
import { Heading } from './Heading/Heading';
import { Images } from './Images/Images';

import styles from './Planet.module.scss';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';

export const Planet = () => {
  const { activePlanet, activeButton, planetsData, buttons } = useContext();

  const planet = planetsData.find(({ name }) => name.toUpperCase() === activePlanet);
  if (!planet) return null;

  const { name, overview, structure, geology, rotation, revolution, radius, temperature, images } = planet;

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
      <div className={styles.mobileWrapper}>
        {buttons.map((buttonText) => {
          const isActive = buttonText === activeButton;

          return <MobileNavigation key={buttonText} isActive={isActive} buttonText={buttonText} />;
        })}
      </div>
      <div className={`${styles.container} ${styles[activePlanet.toLowerCase()] || ''}`}>
        <div className={styles.wrapper}>
          <Images name={name} images={activeImages} />
          <div className={styles.headingWrapper}>
            <Heading name={name} content={content} source={source} />
            <div className={styles.buttonWrapper}>
              {buttons.map((buttonText, idx) => {
                const isActive = buttonText === activeButton;

                return (
                  <Button
                    key={buttonText}
                    isActive={isActive}
                    buttonText={buttonText}
                    buttonNumber={`0${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.metricWrapper}>
          <Detail heading='ROTATION TIME' metric={rotation} />
          <Detail heading='REVOLUTION TIME' metric={revolution} />
          <Detail heading='RADIUS' metric={radius} />
          <Detail heading='AVERAGE TEMP.' metric={temperature} />
        </div>
      </div>
    </Fragment>
  );
};
