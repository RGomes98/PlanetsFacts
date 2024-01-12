import { type ButtonOptions, useContext } from '../../../context/Context';
import styles from './MobileNavigation.module.scss';

type Button = { buttonText: ButtonOptions; isActive: boolean };

export const MobileNavigation = ({ buttonText, isActive }: Button) => {
  const { activePlanet, setActiveButton } = useContext();

  const message =
    buttonText.split(' ')[0] === 'INTERNAL' ? buttonText.split(' ')[1] : buttonText.split(' ')[0];

  return (
    <button className={styles.button} onClick={() => setActiveButton(buttonText)}>
      <h3 className={`${styles.text} ${(isActive && styles.activeText) || ''}`}>{message}</h3>
      <span className={`${styles.bar} ${(isActive && styles[activePlanet.toLowerCase()]) || ''}`} />
    </button>
  );
};
