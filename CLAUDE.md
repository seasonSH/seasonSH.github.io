# Yichun Shi's Personal Homepage

React + Vite personal academic homepage for Yichun Shi (seasonSH).
Deployed to https://seasonsh.github.io via `../seasonSH.github.io` (master branch).
Source lives in this repo on the `source` branch.

## Deploy

```bash
./deploy.sh
```

Builds, copies dist to `../seasonSH.github.io`, commits and pushes.

## Architecture

Fullscreen vertical scroll-snap SPA with 4 slides:

1. **`#home`** — Hero (name, bio, buttons)
2. **`#publications`** — Featured papers horizontal carousel
3. **`#more`** — More publications grid
4. **`#experience`** — Work & education timeline + footer

Slide snapping: `.slides` uses `scroll-snap-type: y mandatory`; each `.slide` uses `scroll-snap-align: start` with `height: 100dvh`.

IntersectionObserver in `App.jsx` toggles `.active` CSS class on slides → triggers `@keyframes slideEnter` entrance animation.

Side dot navigation (desktop only, hidden on mobile via `@media`).

## Structure

```
src/
  config.js                  # Tunable constants (scroll thresholds, timings, animation delays)
  index.css                  # CSS vars, reset, slide infrastructure, entrance animation
  App.jsx                    # Root: SLIDE_IDS, IntersectionObserver, global wheel controller, Nav + slides
  App.module.css             # Side dot indicators (hidden on mobile)
  components/
    Nav.jsx / .module.css    # Fixed top nav; highlights Publications for both pub slides
    Hero.jsx / .module.css   # Slide 1: name, bio, buttons; dot grid + blue glow bg
    Publications.jsx         # Slide 2 (default export) + Slide 3 (MoreSlide named export)
    Publications.module.css  # Horizontal carousel, more grid, arrow buttons
    Experience.jsx           # Slide 4: work + edu timeline, inline footer
    Experience.module.css    # Two-column grid (single column on mobile), footer strip
```

## Scroll control

All vertical navigation is owned by `App.jsx`'s global wheel handler on `#slides`:
- `preventDefault()` prevents native scroll-snap from jumping multiple slides
- One-slide-at-a-time enforced via `isScrolling` lock + `data-scroll-locked` on `#slides`
- `scrollend` event (+ fallback timeout from `config.js`) drives unlock

`Publications.jsx` owns its horizontal carousel:
- `stopPropagation()` so `App.jsx`'s handler doesn't also fire
- Sets `data-scroll-locked` on `#slides` while navigating; both components check this attribute

## Data

**Publications.jsx** — two arrays at top of file:
- `FEATURED` — carousel panels with video. Fields: `tag`, `title`, `authorsStr`, `venue`, `links[]`, `video`
- `MORE` — grid cards, same fields without `video`
- Link objects: `{ label, url }`. Labels: `paper`, `arxiv`, `website`, `code`, `demo`, `report`

**Experience.jsx** — `WORK` and `EDU` arrays at top. Item shape: `{ org, url?, role, desc?, years, type }`.
- `type`: `'work'` | `'intern'` | `'edu'`

## Owner info

- Name: Yichun Shi
- Current: Staff Research Scientist @ Meta Superintelligence Lab (2025–present)
- Previous: Staff Research Scientist @ ByteDance Seed (2021–2025)
- PhD: MSU Biometrics Lab, advised by Prof. Anil K. Jain
- BS: SJTU IEEE Honor Class
- Google Scholar: https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ
- GitHub: https://github.com/seasonSH
- CV: https://seasonsh.github.io/static/CV.pdf
