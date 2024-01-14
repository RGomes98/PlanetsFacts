import { useContext } from '../../../context/Context';
import { NavigationButton } from './NavigationButton';

import styles from './NavigationList.module.scss';

export const NavigationList = () => {
  const { planets, activePlanet } = useContext();

  return (
    <ul className={styles.linkList}>
      {planets.map((planetName) => {
        const isActive = planetName === activePlanet;
        return <NavigationButton key={planetName} name={planetName} isActive={isActive} />;
      })}
    </ul>
  );
};
