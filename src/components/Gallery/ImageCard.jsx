import styles from './Gallery.module.scss'
import { useRef } from 'react'

export const ImageCard = ({ url }) => {
  const dialogRef = useRef(null)
  const handleClick = () => {
    dialogRef.current.showModal()
  }

  return (
    <div className={styles.imageCard}>
      <img
        src={url}
        alt="random"
        onClick={handleClick}
      />
      <dialog
        className={styles.dialog}
        ref={dialogRef}
      >
        <div className={styles.dialogContent}>
          <button onClick={() => dialogRef.current.close()}>Close</button>
          <img
            src={url}
            alt="random"
            onClick={handleClick}
          />
        </div>
      </dialog>
    </div>
  )
}
