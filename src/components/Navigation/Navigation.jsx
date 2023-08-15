import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className="content-wrapper">
        <ul>
          <li>
            <a href="#verdensmaal">VERDENSMÅLENE</a>
          </li>
          <li>
            <a href="#delmaal">DELMÅLENE</a>
          </li>
          <li>
            <a href="#udfordringer">UDFORDRINGER</a>
          </li>
          <li>
            <a href="#kontakt">KONTAKT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
