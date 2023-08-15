import Colorwheel from '../Colorwheel/Colorwheel'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className="content-wrapper">
          <Colorwheel />
          <hgroup>
            <h1>THE GLOBAL GOALS</h1>
            <span>For Sustainable Development</span>
          </hgroup>
        </div>
      </header>
      <Navigation />
    </>
  )
}
