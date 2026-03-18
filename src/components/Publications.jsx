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
    authors: [{ name: 'Y. Shi', me: true }, { name: '*' }, { name: 'P. Wang' }, { name: '*' }, { name: 'W. Huang' }],
    authorsStr: 'Y. Shi*, P. Wang*, W. Huang',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'website', url: 'https://team.doubao.com/en/special/seededit' },
      { label: 'report', url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/SeedEdit.pdf' },
      { label: 'demo', url: 'https://huggingface.co/spaces/ByteDance/SeedEdit-APP' },
    ],
    video: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed_edit_video_00.mp4',
  },
  {
    tag: '3D Generation',
    title: 'MVDream: Multi-view Diffusion for 3D Generation',
    authorsStr: 'Y. Shi, P. Wang, J. Ye, M. Long, K. Ye, X. Yang',
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
    authorsStr: 'P. Wang, Y. Shi, X. Lian, Z. Zhai, X. Xia, X. Xiao, W. Huang, J. Yang',
    venue: 'Technical Report · ByteDance Seed',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2506.05083' },
      { label: 'website', url: 'https://seed.bytedance.com/tech/seededit' },
    ],
  },
  {
    tag: 'Image Synthesis',
    title: 'SemanticStyleGAN: Learning Compositional Generative Priors for Controllable Image Synthesis and Editing',
    authorsStr: 'Y. Shi, X. Yang, Y. Wan, X. Shen',
    venue: 'CVPR 2022',
    links: [
      { label: 'arxiv', url: 'https://arxiv.org/abs/2112.02236' },
      { label: 'website', url: 'https://semanticstylegan.github.io/' },
      { label: 'video', url: 'https://www.youtube.com/watch?v=nfKiVX4pFlw' },
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
    authorsStr: 'J. Sun, X. Wang, Y. Shi, L. Wang, J. Wang, Y. Liu',
    venue: 'SIGGRAPH Asia 2022',
    links: [
      { label: 'paper', url: 'https://arxiv.org/pdf/2205.15517.pdf' },
      { label: 'website', url: 'https://mrtornado24.github.io/IDE-3D' },
      { label: 'code', url: 'https://github.com/MrTornado24/IDE-3D' },
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

function FeaturedPaper({ paper }) {
  return (
    <div className={styles.featuredPaper}>
      <div className={styles.thumb}>
        {paper.video ? (
          <video autoPlay loop muted playsInline>
            <source src={paper.video} type="video/mp4" />
          </video>
        ) : (
          <div className={styles.thumbPlaceholder}>preview</div>
        )}
      </div>
      <div className={styles.paperInfo}>
        <span className={styles.tag}>{paper.tag}</span>
        <h3 className={styles.paperTitle}>{paper.title}</h3>
        <p className={styles.authors}>{paper.authorsStr}</p>
        <span className={styles.venue}>{paper.venue}</span>
        <PaperLinks links={paper.links} />
      </div>
    </div>
  )
}

function SmallCard({ paper }) {
  return (
    <div className={styles.card}>
      <span className={styles.tag}>{paper.tag}</span>
      <h4 className={styles.cardTitle}>{paper.title}</h4>
      <p className={styles.authors}>{paper.authorsStr}</p>
      <span className={styles.venue}>{paper.venue}</span>
      <PaperLinks links={paper.links} />
    </div>
  )
}

export default function Publications() {
  return (
    <section id="publications" className={styles.section}>
      <p className={styles.sectionLabel}>Featured Work</p>
      <h2 className={styles.sectionTitle}>Selected Publications</h2>

      <div className={styles.featured}>
        {FEATURED.map((p) => (
          <FeaturedPaper key={p.title} paper={p} />
        ))}
      </div>

      <div className={styles.moreGrid}>
        {MORE.map((p) => (
          <SmallCard key={p.title} paper={p} />
        ))}
      </div>

      <p className={styles.scholarLink}>
        Full list on{' '}
        <a href="https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ" target="_blank" rel="noreferrer">
          Google Scholar
        </a>
      </p>
    </section>
  )
}
