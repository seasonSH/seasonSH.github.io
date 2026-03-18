import styles from './Experience.module.css'

const ITEMS = [
  {
    org: 'Meta Superintelligence Lab',
    role: 'Staff Research Scientist',
    desc: 'Generative Models',
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
    org: 'Michigan State University',
    url: 'https://msu.edu/',
    role: 'PhD, Computer Science',
    desc: 'Biometrics Lab · Advised by Prof. Anil K. Jain',
    years: '2016 – 2021',
    type: 'edu',
  },
  {
    org: 'NEC Laboratories America',
    url: 'http://www.nec-labs.com/',
    role: 'Research Intern',
    desc: 'Video Face Recognition',
    years: 'Summer 2019',
    type: 'intern',
  },
  {
    org: 'Visa Inc.',
    url: 'https://usa.visa.com/',
    role: 'PhD Intern',
    desc: 'Automatic system for ID-selfie image translation',
    years: 'Summer 2018',
    type: 'intern',
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

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <p className={styles.sectionLabel}>Background</p>
      <h2 className={styles.sectionTitle}>Experience & Education</h2>
      <div className={styles.timeline}>
        {ITEMS.map((item) => (
          <div key={item.org} className={styles.item}>
            <div className={styles.dot} data-type={item.type} />
            <div className={styles.content}>
              <div className={styles.row}>
                <span className={styles.org}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </span>
                <span className={styles.years}>{item.years}</span>
              </div>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
