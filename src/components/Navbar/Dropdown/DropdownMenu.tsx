import { DropdownButton } from './DropdownButton';
import { useContext } from '../../../context/Context';

import styles from './DropdownMenu.module.scss';

export const DropdownMenu = () => {
  const { planets, isDropdownActive } = useContext();

  return (
    <div className={`${styles.dropdownMenuWrapper} ${(isDropdownActive && styles.dropdownMenuActive) || ''}`}>
      <ul className={styles.dropdownMenu}>
        {planets.map((planetName) => (
          <DropdownButton key={planetName} name={planetName} />
        ))}
      </ul>
    </div>
  );
};
