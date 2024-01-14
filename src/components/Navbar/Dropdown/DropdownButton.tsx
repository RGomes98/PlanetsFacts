import { PlanetOptions, useContext } from '../../../context/Context';

import ChevronIcon from '../../../assets/icon-chevron.svg?react';
import styles from './DropdownButton.module.scss';

export const DropdownButton = ({ name }: { name: PlanetOptions }) => {
  const { setActivePlanet, setIsDropdownActive } = useContext();

  function handleClick() {
    setActivePlanet(name);
    setIsDropdownActive(false);
  }

  return (
    <li className={styles.item}>
      <button className={styles.button} onClick={handleClick}>
        <div className={styles.wrapper}>
          <span className={`${styles[name.toLowerCase()]} ${styles.color}`} />
          <span className={styles.name}>{name}</span>
        </div>
        <ChevronIcon className={styles.icon} />
      </button>
    </li>
  );
};
