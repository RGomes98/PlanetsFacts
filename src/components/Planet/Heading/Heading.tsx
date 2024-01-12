import SourceIcon from '../../../assets/icon-source.svg?react';
import styles from './Heading.module.scss';

type Heading = { name: string; content: string; source: string };

export const Heading = ({ name, content, source }: Heading) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{name}</h1>
      <p className={styles.description}>{content}</p>
      <div className={styles.sourceWrapper}>
        <span className={styles.source}>Source :</span>
        <a className={styles.link} href={source}>
          Wikipedia
          <SourceIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
};
