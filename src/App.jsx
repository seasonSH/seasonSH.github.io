import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Publications, { MoreSlide } from './components/Publications'
import Experience from './components/Experience'
import styles from './App.module.css'

const SLIDE_IDS = ['home', 'publications', 'more', 'experience']

export default function App() {
  const [active, setActive] = useState('home')
  const activeRef = useRef('home')

  useEffect(() => {
    const container = document.getElementById('slides')
    const els = SLIDE_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.5) {
            setActive(e.target.id)
            activeRef.current = e.target.id
            e.target.classList.add('active')
          }
        })
      },
      { threshold: 0.5, root: container }
    )
    els.forEach((el) => observer.observe(el))
    document.getElementById('home')?.classList.add('active')
    return () => observer.disconnect()
  }, [])

  // Global vertical scroll controller — one slide at a time, no multi-snap jumps
  useEffect(() => {
    const slidesEl = document.getElementById('slides')
    if (!slidesEl) return

    let isScrolling = false
    let timer = null
    const unlock = () => { isScrolling = false }

    const onWheel = (e) => {
      e.preventDefault()
      // Publications slide manages its own lock via data-scroll-locked
      if (slidesEl.dataset.scrollLocked) return
      if (isScrolling) return
      if (Math.abs(e.deltaY) < 5) return

      isScrolling = true
      clearTimeout(timer)

      const curIdx = SLIDE_IDS.indexOf(activeRef.current)
      const nextIdx = Math.max(0, Math.min(SLIDE_IDS.length - 1, curIdx + (e.deltaY > 0 ? 1 : -1)))

      if (nextIdx !== curIdx) {
        slidesEl.scrollTo({ top: nextIdx * slidesEl.clientHeight, behavior: 'smooth' })
      }

      const onEnd = () => {
        slidesEl.removeEventListener('scrollend', onEnd)
        clearTimeout(timer)
        timer = setTimeout(unlock, 300)
      }
      slidesEl.addEventListener('scrollend', onEnd, { once: true })
      timer = setTimeout(unlock, 1200)
    }

    slidesEl.addEventListener('wheel', onWheel, { passive: false })
    return () => { slidesEl.removeEventListener('wheel', onWheel); clearTimeout(timer) }
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
        <section id="publications" className="slide"><Publications /></section>
        <section id="more" className="slide"><MoreSlide /></section>
        <section id="experience" className="slide"><Experience /></section>
      </div>
    </>
  )
}
