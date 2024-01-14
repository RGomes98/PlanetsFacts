import { useContext } from '../../../context/Context';
import { Button } from './Button';

import styles from './Buttons.module.scss';

export const Buttons = () => {
  const { buttons, activeButton } = useContext();

  return (
    <div className={styles.wrapper}>
      {buttons.map((buttonText, idx) => {
        const isActive = buttonText === activeButton;

        return (
          <Button key={buttonText} isActive={isActive} buttonText={buttonText} buttonNumber={`0${idx + 1}`} />
        );
      })}
    </div>
  );
};
