import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <p className={styles.email}>sc2h6o (at) gmail (dot) com</p>
          <p className={styles.location}>Sunnyvale, CA</p>
        </div>
        <div className={styles.socials}>
          <a href="https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ" target="_blank" rel="noreferrer">Scholar</a>
          <a href="https://github.com/seasonSH" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yichun-shi-081a56b6" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Yichun Shi</p>
    </footer>
  )
}
