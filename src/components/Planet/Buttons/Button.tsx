import { type ButtonOptions, useContext } from '../../../context/Context';

import styles from './Button.module.scss';

type Button = {
  buttonNumber: string;
  buttonText: ButtonOptions;
  isActive: boolean;
};

export const Button = ({ buttonNumber, buttonText, isActive }: Button) => {
  const { activePlanet, setActiveButton } = useContext();

  return (
    <button
      className={`${styles.button} ${(isActive && styles[activePlanet.toLowerCase()]) || ''}`}
      onClick={() => setActiveButton(buttonText)}
    >
      <span className={styles.number}>{buttonNumber}</span>
      <span className={styles.text}>{buttonText}</span>
    </button>
  );
};
