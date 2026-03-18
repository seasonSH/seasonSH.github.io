import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Yichun Shi</h1>
      <p className={styles.bio}>
        I work on generative models for multimodal content — image, video, and 3D generation.
        Currently Staff Research Scientist at{' '}
        <a href="https://ai.meta.com/" target="_blank" rel="noreferrer">
          Meta Superintelligence Lab
        </a>
        . Previously Research Scientist at{' '}
        <a href="https://seed.bytedance.com/" target="_blank" rel="noreferrer">
          ByteDance Seed
        </a>
        . PhD from{' '}
        <a href="http://biometrics.cse.msu.edu/" target="_blank" rel="noreferrer">
          MSU Biometrics Lab
        </a>
        , advised by{' '}
        <a href="http://www.cse.msu.edu/~jain/" target="_blank" rel="noreferrer">
          Prof. Anil K. Jain
        </a>
        . BS from SJTU IEEE Honor Class.
      </p>
      <div className={styles.links}>
        <a
          href="https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ"
          className={`${styles.btn} ${styles.btnPrimary}`}
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
        </a>
        <a
          href="https://github.com/seasonSH"
          className={`${styles.btn} ${styles.btnOutline}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yichun-shi-081a56b6"
          className={`${styles.btn} ${styles.btnOutline}`}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://seasonsh.github.io/static/CV.pdf"
          className={`${styles.btn} ${styles.btnOutline}`}
          target="_blank"
          rel="noreferrer"
        >
          CV / Resume
        </a>
      </div>
    </section>
  )
}
