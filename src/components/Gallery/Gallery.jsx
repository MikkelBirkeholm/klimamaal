import styles from './Gallery.module.scss'
import { ImageCard } from './ImageCard'

export const Gallery = ({ images }) => {
  return (
    <section className={styles.gallerySection}>
      <p>Se eksempler på enkelte delmål her:</p>
      <div className={styles.galleryWrapper}>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            url={`/images/Goals/goal-${image}.png`}
          />
        ))}
        <ImageCard
          key="static"
          url={`/images/Goals/Global-Goals.png`}
        />
      </div>
    </section>
  )
}
