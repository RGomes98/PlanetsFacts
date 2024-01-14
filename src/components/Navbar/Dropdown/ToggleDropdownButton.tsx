import { useContext } from '../../../context/Context';

import HamburgerIcon from '../../../assets/icon-hamburger.svg?react';
import styles from './ToggleDropdownButton.module.scss';

export const ToggleDropdownButton = () => {
  const { setIsDropdownActive } = useContext();

  return (
    <button className={styles.button} onClick={() => setIsDropdownActive((prev) => !prev)}>
      <HamburgerIcon className={styles.icon} />
    </button>
  );
};
