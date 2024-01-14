import { useContext } from '../../../context/Context';
import { Button } from './Button';

import styles from './MobileNavigation.module.scss';

export const MobileNavigation = () => {
  const { buttons, activeButton } = useContext();

  return (
    <div className={styles.wrapper}>
      {buttons.map((buttonText) => {
        const isActive = buttonText === activeButton;

        return <Button key={buttonText} isActive={isActive} buttonText={buttonText} />;
      })}
    </div>
  );
};
