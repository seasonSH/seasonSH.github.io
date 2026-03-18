import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.name}>Yichun Shi</span>
      <div className={styles.links}>
        <a href="#publications">Publications</a>
        <a href="#experience">Experience</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  )
}
