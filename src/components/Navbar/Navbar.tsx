import { ToggleDropdownButton } from './DropdownMenu/ToggleDropdownButton';
import { PlanetDropdownMenu } from './DropdownMenu/PlanetDropdownMenu';
import { PlanetList } from './PlanetNavigation/PlanetList';
import { Fragment } from 'react';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <span className={styles.logo}>THE PLANETS</span>
        <PlanetList />
        <ToggleDropdownButton />
      </nav>
      <PlanetDropdownMenu />
    </Fragment>
  );
};
