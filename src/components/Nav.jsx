import styles from './Nav.module.css'

const NAV_LINKS = [
  { label: 'Home', target: 'home' },
  { label: 'Publications', target: 'publications' },
  { label: 'Experience', target: 'experience' },
]

export default function Nav({ active, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.name}>Yichun Shi</span>
      <div className={styles.links}>
        {NAV_LINKS.map(({ label, target }) => (
          <a
            key={target}
            onClick={() => onNavigate(target)}
            className={
              active === target || (target === 'publications' && active === 'more')
                ? styles.active
                : ''
            }
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
