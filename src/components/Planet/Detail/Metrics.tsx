import { Metric } from './Metric';

import styles from './Metrics.module.scss';

export type Metrics = { rotation: string; revolution: string; radius: string; temperature: string };

export const Metrics = ({ rotation, revolution, radius, temperature }: Metrics) => {
  return (
    <div className={styles.wrapper}>
      <Metric heading='ROTATION TIME' metric={rotation} />
      <Metric heading='REVOLUTION TIME' metric={revolution} />
      <Metric heading='RADIUS' metric={radius} />
      <Metric heading='AVERAGE TEMP.' metric={temperature} />
    </div>
  );
};
