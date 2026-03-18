import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { FeaturedSlide, MoreSlide } from './components/Publications'
import Experience from './components/Experience'
import styles from './App.module.css'

const SLIDE_IDS = ['home', 'featured', 'more', 'experience']

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const container = document.getElementById('slides')
    const els = SLIDE_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) setActive(e.target.id)
        })
      },
      { threshold: 0.5, root: container }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Nav active={active} onNavigate={scrollTo} />
      <div className={styles.dots}>
        {SLIDE_IDS.map((id) => (
          <button
            key={id}
            className={`${styles.dot} ${active === id ? styles.dotActive : ''}`}
            onClick={() => scrollTo(id)}
            aria-label={id}
          />
        ))}
      </div>
      <div id="slides" className="slides">
        <section id="home" className="slide"><Hero /></section>
        <section id="featured" className="slide"><FeaturedSlide /></section>
        <section id="more" className="slide"><MoreSlide /></section>
        <section id="experience" className="slide"><Experience /></section>
      </div>
    </>
  )
}
