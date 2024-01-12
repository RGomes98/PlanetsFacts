import { PlanetsOptions, useContext } from '../../../context/Context';

import ChevronIcon from '../../../assets/icon-chevron.svg?react';
import styles from './PlanetDropdownButton.module.scss';

export const PlanetDropdownButton = ({ name }: { name: PlanetsOptions }) => {
  const { setActivePlanet, setIsDropdownActive } = useContext();

  function handlePlanetButton() {
    setActivePlanet(name);
    setIsDropdownActive(false);
  }

  return (
    <li className={styles.item}>
      <button className={styles.button} onClick={handlePlanetButton}>
        <div className={styles.wrapper}>
          <span className={`${styles[name.toLowerCase()]} ${styles.color}`} />
          <span className={styles.name}>{name}</span>
        </div>
        <ChevronIcon className={styles.icon} />
      </button>
    </li>
  );
};
