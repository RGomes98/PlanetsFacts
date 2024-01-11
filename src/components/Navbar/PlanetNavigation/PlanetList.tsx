import { useContext } from '../../../context/Context';
import { PlanetButton } from './PlanetButton';

import styles from './PlanetList.module.scss';

export const PlanetList = () => {
  const { planets, activePlanet } = useContext();

  return (
    <ul className={styles.linkList}>
      {planets.map((planetName) => {
        const isActive = planetName === activePlanet;
        return <PlanetButton key={planetName} name={planetName} isActive={isActive} />;
      })}
    </ul>
  );
};
