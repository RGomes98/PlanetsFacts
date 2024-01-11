import { PlanetDropdownButton } from './PlanetDropdownButton';
import { useContext } from '../../../context/Context';

import styles from './PlanetDropdownMenu.module.scss';

export const PlanetDropdownMenu = () => {
  const { planets, isDropdownActive } = useContext();

  return (
    <div className={`${styles.dropdownMenuWrapper} ${(isDropdownActive && styles.dropdownMenuActive) || ''}`}>
      <ul className={styles.dropdownMenu}>
        {planets.map((planetName) => (
          <PlanetDropdownButton key={planetName} name={planetName} />
        ))}
      </ul>
    </div>
  );
};
