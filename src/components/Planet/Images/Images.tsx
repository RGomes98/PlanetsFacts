import styles from './Images.module.scss';

export const Images = ({ name, images }: { name: string; images: string[] }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        const isGeologySelected = index === 1;

        return (
          <img
            alt={name}
            key={image}
            src={image}
            className={`${styles.image} ${styles[name.toLowerCase()]} ${
              (isGeologySelected && styles.geologyImage) || ''
            }`}
          />
        );
      })}
    </div>
  );
};
