import styles from './Experience.module.css'

const WORK = [
  {
    org: 'Meta Superintelligence Lab',
    role: 'Staff Research Scientist',
    desc: 'Multimodal Generative Models',
    years: '2025 – present',
    type: 'work',
  },
  {
    org: 'ByteDance Seed',
    role: 'Staff Research Scientist',
    desc: 'Generative Models, AIGC',
    years: '2021 – 2025',
    type: 'work',
  },
  {
    org: 'NEC Laboratories America',
    url: 'http://www.nec-labs.com/',
    role: 'Research Intern',
    desc: 'Unconstrained Face Recognition',
    years: 'Summer 2019',
    type: 'intern',
  },
  {
    org: 'Visa Inc.',
    url: 'https://usa.visa.com/',
    role: 'PhD Intern',
    desc: 'ID Face Recognition',
    years: 'Summer 2018',
    type: 'intern',
  },
]

const EDU = [
  {
    org: 'Michigan State University',
    url: 'https://msu.edu/',
    role: 'PhD, Computer Science',
    desc: 'Biometrics Lab · Advised by Prof. Anil K. Jain',
    years: '2016 – 2021',
    type: 'edu',
  },
  {
    org: 'Shanghai Jiao Tong University',
    url: 'http://en.sjtu.edu.cn/',
    role: 'BS, Computer Science',
    desc: 'IEEE Honor Class',
    years: '2012 – 2016',
    type: 'edu',
  },
]

function ExpItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={`${styles.dot} ${styles[item.type]}`} />
      <div className={styles.itemHeader}>
        <span className={styles.org}>
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer">{item.org}</a>
          ) : (
            item.org
          )}
        </span>
        <span className={styles.years}>{item.years}</span>
      </div>
      <p className={styles.role}>{item.role}</p>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  )
}

export default function Experience() {
  return (
    <div className={styles.slideContent}>
      <div className={styles.slideHeader}>
        <div className={styles.label}>Background</div>
        <div className={styles.sectionTitle}>Experience &amp; Education</div>
      </div>
      <div className={styles.cols}>
        <div>
          <div className={styles.colLabel}>Work</div>
          <div className={styles.list}>
            {WORK.map((item) => <ExpItem key={item.org} item={item} />)}
          </div>
        </div>
        <div>
          <div className={styles.colLabel}>Education</div>
          <div className={styles.list}>
            {EDU.map((item) => <ExpItem key={item.org} item={item} />)}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <span className={styles.footerLeft}>
          sc2h6o (at) gmail (dot) com &nbsp;·&nbsp; Sunnyvale, CA &nbsp;·&nbsp; © {new Date().getFullYear()} Yichun Shi
        </span>
        <div className={styles.footerLinks}>
          <a href="https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ" target="_blank" rel="noreferrer">Scholar</a>
          <a href="https://github.com/seasonSH" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/yichun-shi-081a56b6" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://seasonsh.github.io/static/CV.pdf" target="_blank" rel="noreferrer">CV</a>
        </div>
      </div>
    </div>
  )
}
