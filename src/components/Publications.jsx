import styles from './Publications.module.css'

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
    title: 'SeedEdit: Align Image Re-generation to Image Editing',
    authorsStr: 'Y. Shi*, P. Wang*, W. Huang',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'website', url: 'https://seed.bytedance.com/tech/seededit' },
      { label: 'report', url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/SeedEdit.pdf' },
      { label: 'demo', url: 'https://huggingface.co/spaces/ByteDance/SeedEdit-APP' },
    ],
    video: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed_edit_video_00.mp4',
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
    tag: 'Image Generation',
    title: 'SeedEdit 3.0: Fast and High-Quality Generative Image Editing',
    authorsStr: 'P. Wang, Y. Shi, X. Lian, et al.',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2506.05083' },
      { label: 'website', url: 'https://seed.bytedance.com/tech/seededit' },
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
    tag: '3D Synthesis',
    title: 'IDE-3D: Interactive Disentangled Editing for High-Resolution 3D-aware Portrait Synthesis',
    authorsStr: 'J. Sun, X. Wang, Y. Shi, et al.',
    venue: 'SIGGRAPH Asia 2022',
    links: [
      { label: 'paper', url: 'https://arxiv.org/pdf/2205.15517.pdf' },
      { label: 'website', url: 'https://mrtornado24.github.io/IDE-3D' },
    ],
  },
  {
    tag: '3D Generation',
    title: 'Lifting 2D StyleGAN for 3D-aware Face Generation',
    authorsStr: 'Y. Shi, D. Aggarwal, A. K. Jain',
    venue: 'CVPR 2021',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2011.13126' },
      { label: 'code', url: 'https://github.com/seasonSH/LiftedGAN' },
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
  {
    tag: 'Image Synthesis',
    title: 'WarpGAN: Automatic Caricature Generation',
    authorsStr: 'Y. Shi, D. Deb, A. K. Jain',
    venue: 'CVPR 2019',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/1811.10100' },
      { label: 'code', url: 'https://github.com/seasonSH/WarpGAN' },
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

export function FeaturedSlide() {
  return (
    <div className={styles.slideContent}>
      <div className={styles.slideHeader}>
        <div className={styles.label}>Featured Work</div>
        <div className={styles.sectionTitle}>Selected Publications</div>
      </div>
      <div className={styles.featuredGrid}>
        {FEATURED.map((p) => (
          <div key={p.title} className={styles.featCard}>
            <div className={styles.featThumb}>
              <video autoPlay loop muted playsInline>
                <source src={p.video} type="video/mp4" />
              </video>
            </div>
            <div className={styles.featInfo}>
              <span className={styles.tag}>{p.tag}</span>
              <div className={styles.paperTitle}>{p.title}</div>
              <div className={styles.authors}>{p.authorsStr}</div>
              <span className={styles.venue}>{p.venue}</span>
              <PaperLinks links={p.links} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MoreSlide() {
  return (
    <div className={`${styles.slideContent} ${styles.altBg}`}>
      <div className={styles.slideHeader}>
        <div className={styles.label}>More Work</div>
        <div className={styles.sectionTitle}>Publications</div>
      </div>
      <div className={styles.moreGrid}>
        {MORE.map((p) => (
          <div key={p.title} className={styles.moreCard}>
            <span className={styles.tag}>{p.tag}</span>
            <div className={styles.moreTitle}>{p.title}</div>
            <div className={styles.authors}>{p.authorsStr}</div>
            <span className={styles.venue}>{p.venue}</span>
            <PaperLinks links={p.links} />
          </div>
        ))}
      </div>
      <p className={styles.scholarNote}>
        Full list on{' '}
        <a
          href="https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          Google Scholar
        </a>
      </p>
    </div>
  )
}
