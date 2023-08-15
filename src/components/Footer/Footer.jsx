import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <div className="content-wrapper">
        <div>
          <h3>Eksterne Links:</h3>
          <ul>
            <li>
              <a href="#">https://www.verdensmaalene.dk/</a>
            </li>
            <li>
              <a href="#">https://www.alobalgoals.ord/</a>
            </li>
            <li>
              <a href="#">https://www.un.org/sustainabledevelopment/</a>
            </li>
            <li>
              <a href="#">https://worldslargestlesson.globalgoals.org/</a>
            </li>
            <li>
              <a href="#">https://www.unenvironment.org/</a>
            </li>
            <li>
              <a href="#">https://ve.dk/klimaberegner/</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Ressourcer:</h3>
          <ul>
            <li>Bliver Verden Bedre</li>
            <li>Spotlight Rapport</li>
          </ul>
        </div>
        <div>
          <img
            src="/images/Partner-UNDP-Full.png"
            alt=""
            width={200}
          />
        </div>
      </div>
    </footer>
  )
}
