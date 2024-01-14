import { ToggleDropdownButton } from './Dropdown/ToggleDropdownButton';
import { DropdownMenu } from './Dropdown/DropdownMenu';
import { NavigationList } from './Navigation/NavigationList';
import { Fragment } from 'react';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
        <span className={styles.logo}>THE PLANETS</span>
        <NavigationList />
        <ToggleDropdownButton />
      </nav>
      <DropdownMenu />
    </Fragment>
  );
};
