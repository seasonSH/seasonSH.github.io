import { useRef, useState, useEffect } from 'react'
import styles from './Publications.module.css'
import { SCROLL_THRESHOLD, CAROUSEL_UNLOCK_DELAY, CAROUSEL_FALLBACK_TIMEOUT, CARD_STAGGER_BASE, CARD_STAGGER_STEP } from '../config'

const FEATURED = [
  {
    tag: 'Image Generation',
    title: 'SeedDream 4.0',
    authorsStr: 'ByteDance Seed',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'website', url: 'https://seed.bytedance.com/en/seedream4_0' },
      { label: 'report', url: 'https://arxiv.org/abs/2509.20427' },
    ],
    video: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/bdeh7uhpsuht/Seedream%204.0%20f.mp4',
  },
  {
    tag: 'Image Generation',
    title: 'SeedEdit 3.0: Fast and High-Quality Generative Image Editing',
    authorsStr: 'P. Wang, Y. Shi, X. Lian, et al.',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2506.05083' },
      { label: 'website', url: 'https://seed.bytedance.com/tech/seededit' },
    ],
    video: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/bdeh7uhpsuht/SeedEdit%203.0%20%E7%BB%88%E7%89%88%E8%A7%86%E9%A2%91.mp4',
  },
  {
    tag: '3D Generation',
    title: 'MVDream: Multi-view Diffusion for 3D Generation',
    authorsStr: 'Y. Shi, P. Wang, J. Ye, M. Long, K. Li, X. Yang',
    venue: 'ICLR 2024',
    links: [
      { label: 'paper', url: 'https://arxiv.org/abs/2308.16512' },
      { label: 'website', url: 'https://mv-dream.github.io/' },
      { label: 'code', url: 'https://github.com/bytedance/MVDream' },
    ],
    video: 'https://mv-dream.github.io/static/visualization.mp4',
  },
]

const MORE = [
  {
    tag: 'Video Generation',
    title: 'VTok: A Unified Video Tokenizer with Decoupled Spatial-Temporal Latents',
    authorsStr: 'F. Wang, Y. Shi, C. Yang, Q. Guo, J. Sun, A. Yuille, P. Wang',
    venue: 'arXiv 2025',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2602.04202' },
    ],
  },
  {
    tag: 'Image Generation',
    title: 'Dual Diffusion for Unified Image Generation and Understanding',
    authorsStr: 'Z. Li, H. Li, Y. Shi, A. B. Farimani, Y. Kluger, L. Yang, P. Wang',
    venue: 'CVPR 2025',
    links: [
      { label: 'paper', url: 'https://arxiv.org/abs/2501.00289' },
      { label: 'website', url: 'https://zijieli-jlee.github.io/dualdiff.github.io/' },
    ],
  },
  {
    tag: 'Image Generation',
    title: 'SeedEdit: Align Image Re-generation to Image Editing',
    authorsStr: 'Y. Shi*, P. Wang*, W. Huang',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'website', url: 'https://seed.bytedance.com/tech/seededit' },
      { label: 'report', url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/SeedEdit.pdf' },
      { label: 'demo', url: 'https://huggingface.co/spaces/ByteDance/SeedEdit-APP' },
    ],
  },
  {
    tag: 'Image Editing',
    title: 'HQ-Edit: A High-Quality Dataset for Instruction-based Image Editing',
    authorsStr: 'M. Hui, S. Yang, B. Zhao, Y. Shi, et al.',
    venue: 'ICLR 2025',
    links: [
      { label: 'paper', url: 'https://arxiv.org/abs/2404.09990' },
      { label: 'website', url: 'https://thefllood.github.io/HQEdit_web/' },
      { label: 'code', url: 'https://github.com/UCSC-VLAA/HQ-Edit' },
    ],
  },
  {
    tag: '3D Generation',
    title: 'ImageDream: Image-Prompt Multi-view Diffusion for 3D Generation',
    authorsStr: 'P. Wang, Y. Shi',
    venue: 'arXiv 2023',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2312.02201' },
      { label: 'website', url: 'https://image-dream.github.io' },
      { label: 'code', url: 'https://github.com/bytedance/ImageDream' },
    ],
  },
  {
    tag: 'Image Synthesis',
    title: 'SemanticStyleGAN: Learning Compositional Generative Priors for Controllable Image Synthesis',
    authorsStr: 'Y. Shi, X. Yang, Y. Wan, X. Shen',
    venue: 'CVPR 2022',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2112.02236' },
      { label: 'website', url: 'https://semanticstylegan.github.io/' },
      { label: 'code', url: 'https://github.com/seasonSH/SemanticStyleGAN' },
    ],
  },
  {
    tag: '3D Generation',
    title: 'PanoHead: Geometry-Aware 3D Full-Head Synthesis in 360°',
    authorsStr: 'S. An, H. Xu, Y. Shi, G. Song, et al.',
    venue: 'CVPR 2023',
    links: [
      { label: 'paper', url: 'https://openaccess.thecvf.com/content/CVPR2023/papers/An_PanoHead_Geometry-Aware_3D_Full-Head_Synthesis_in_360deg_CVPR_2023_paper.pdf' },
      { label: 'website', url: 'https://sizhean.github.io/panohead' },
      { label: 'code', url: 'https://github.com/sizhean/panohead' },
    ],
  },
  {
    tag: 'Uncertainty Learning',
    title: 'Probabilistic Face Embeddings',
    authorsStr: 'Y. Shi, A. K. Jain',
    venue: 'ICCV 2019',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/1904.09658' },
      { label: 'code', url: 'https://github.com/seasonSH/Probabilistic-Face-Embeddings' },
    ],
  },
]

function PaperLinks({ links }) {
  return (
    <div className={styles.paperLinks}>
      {links.map((l) => (
        <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
          {l.label}
        </a>
      ))}
    </div>
  )
}

export default function Publications() {
  const scrollRef = useRef(null)
  const [activePanel, setActivePanel] = useState(0)
  const activePanelRef = useRef(0)
  const isScrolling = useRef(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth)
      setActivePanel(idx)
      activePanelRef.current = idx
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // Intercept vertical wheel → horizontal panel navigation
  useEffect(() => {
    const slideEl = document.getElementById('publications')
    if (!slideEl) return

    const slidesEl = document.getElementById('slides')
    const unlock = () => {
      isScrolling.current = false
      slidesEl?.removeAttribute('data-scroll-locked')
    }
    let unlockTimer = null

    const scheduleUnlock = (el) => {
      // Prefer scrollend event; fall back to timeout
      clearTimeout(unlockTimer)
      const onEnd = () => {
        el.removeEventListener('scrollend', onEnd)
        unlockTimer = setTimeout(unlock, CAROUSEL_UNLOCK_DELAY)
      }
      el.addEventListener('scrollend', onEnd, { once: true })
      // Fallback in case scrollend never fires
      unlockTimer = setTimeout(() => {
        el.removeEventListener('scrollend', onEnd)
        unlock()
      }, CAROUSEL_FALLBACK_TIMEOUT)
    }

    const onWheel = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (isScrolling.current) return
      if (slidesEl?.dataset.scrollLocked) return
      if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return

      isScrolling.current = true
      slidesEl?.setAttribute('data-scroll-locked', '1')
      const cur = activePanelRef.current

      if (e.deltaY > 0) {
        if (cur < FEATURED.length - 1) {
          goTo(cur + 1)
          scheduleUnlock(scrollRef.current)
        } else {
          slidesEl?.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
          scheduleUnlock(slidesEl)
        }
      } else {
        if (cur > 0) {
          goTo(cur - 1)
          scheduleUnlock(scrollRef.current)
        } else {
          slidesEl?.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })
          scheduleUnlock(slidesEl)
        }
      }
    }

    slideEl.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      slideEl.removeEventListener('wheel', onWheel)
      clearTimeout(unlockTimer)
    }
  }, [])

  function goTo(idx) {
    scrollRef.current?.scrollTo({ left: idx * scrollRef.current.clientWidth, behavior: 'smooth' })
  }

  const isFirst = activePanel === 0
  const isLast = activePanel === FEATURED.length - 1

  return (
    <div className={styles.container}>
      <div className={styles.hScroll} ref={scrollRef}>
        {FEATURED.map((p, i) => (
          <div key={p.title} className={styles.panel}>
            <div className={styles.panelVideo}>
              <video autoPlay loop muted playsInline>
                <source src={p.video} type="video/mp4" />
              </video>
            </div>
            <div className={styles.panelInfo}>
              <div className={styles.panelCount}>
                {String(i + 1).padStart(2, '0')} / {String(FEATURED.length).padStart(2, '0')}
              </div>
              <span className={styles.tag}>{p.tag}</span>
              <div className={styles.panelTitle}>{p.title}</div>
              <div className={styles.authors}>{p.authorsStr}</div>
              <span className={styles.venue}>{p.venue}</span>
              <PaperLinks links={p.links} />
            </div>
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      {!isFirst && (
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => goTo(activePanel - 1)} aria-label="previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {!isLast && (
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => goTo(activePanel + 1)} aria-label="next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div className={styles.panelDots}>
        {FEATURED.map((_, i) => (
          <button
            key={i}
            className={`${styles.panelDot} ${activePanel === i ? styles.panelDotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`panel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function MoreSlide() {
  return (
    <div className={styles.moreSlideContent}>
      <div className={styles.slideHeader} style={{ animationDelay: '0ms' }}>
        <div className={styles.label}>More Work</div>
        <div className={styles.sectionTitle}>Publications</div>
      </div>
      <div className={styles.moreGrid}>
        {MORE.map((p, i) => (
          <div key={p.title} className={styles.moreCard} style={{ animationDelay: `${CARD_STAGGER_BASE + i * CARD_STAGGER_STEP}ms` }}>
            <span className={styles.tag}>{p.tag}</span>
            <div className={styles.moreTitle}>{p.title}</div>
            <div className={styles.authors}>{p.authorsStr}</div>
            <span className={styles.venue}>{p.venue}</span>
            <PaperLinks links={p.links} />
          </div>
        ))}
      </div>
      <p className={styles.scholarNote} style={{ animationDelay: `${CARD_STAGGER_BASE + MORE.length * CARD_STAGGER_STEP}ms` }}>
        Full list on{' '}
        <a href="https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ" target="_blank" rel="noreferrer">
          Google Scholar
        </a>
      </p>
    </div>
  )
}
