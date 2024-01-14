import styles from './Metric.module.scss';

export const Metric = ({ heading, metric }: { heading: string; metric: string }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{heading}</h4>
      <h2 className={styles.metric}>{metric}</h2>
    </div>
  );
};
