import { type PlanetOptions, useContext } from '../../../context/Context';

import styles from './NavigationButton.module.scss';

export const NavigationButton = ({ name, isActive }: { name: PlanetOptions; isActive: boolean }) => {
  const { activePlanet, setActivePlanet } = useContext();

  return (
    <li className={styles.item}>
      <span className={`${styles.bar} ${(isActive && styles[activePlanet.toLowerCase()]) || ''}`} />
      <button className={styles.button} onClick={() => setActivePlanet(name)}>
        <h4 className={styles.heading}>{name}</h4>
      </button>
    </li>
  );
};
