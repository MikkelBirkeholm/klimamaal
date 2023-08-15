import styles from '../PageContent.module.scss'

export const SectionHeader = ({ title, children, id }) => {
  return (
    <hgroup
      className={styles.sectionHeader}
      id={id}
    >
      <a href="#">Tilbage til toppen</a>
      <h2>{title}</h2>
      {children}
    </hgroup>
  )
}
