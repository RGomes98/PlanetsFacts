import { type ButtonOptions, useContext } from '../../../context/Context';

import styles from './Button.module.scss';

type Button = { buttonText: ButtonOptions; isActive: boolean };

export const Button = ({ buttonText, isActive }: Button) => {
  const { activePlanet, setActiveButton } = useContext();

  const buttonHeading: Record<Button['buttonText'], string> = {
    OVERVIEW: 'OVERVIEW',
    'INTERNAL STRUCTURE': 'STRUCTURE',
    'SURFACE GEOLOGY': 'SURFACE',
  };

  return (
    <button className={styles.button} onClick={() => setActiveButton(buttonText)}>
      <h3 className={`${styles.text} ${(isActive && styles.activeText) || ''}`}>
        {buttonHeading[buttonText]}
      </h3>
      <span className={`${styles.bar} ${(isActive && styles[activePlanet.toLowerCase()]) || ''}`} />
    </button>
  );
};
