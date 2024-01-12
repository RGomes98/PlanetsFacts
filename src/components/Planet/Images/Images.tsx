import styles from './Images.module.scss';

export const Images = ({ name, images }: { name: string; images: string[] }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        const imgUrl = new URL(image, import.meta.url).href;
        const isGeologySelected = index === 1;

        return (
          <img
            alt={name}
            key={image}
            src={imgUrl}
            className={`${styles.image} ${styles[name.toLowerCase()]} ${
              (isGeologySelected && styles.geologyImage) || ''
            }`}
          />
        );
      })}
    </div>
  );
};
