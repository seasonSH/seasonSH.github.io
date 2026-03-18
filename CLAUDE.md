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

Slide snapping: `.slides` container uses `scroll-snap-type: y mandatory`; each `.slide` uses `scroll-snap-align: start` with `height: 100dvh`.

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

## config.js — tunable constants

All user-facing feel parameters live here. Edit this file to tune behaviour without touching logic.

| Constant                  | Default | Controls                                              |
|---------------------------|---------|-------------------------------------------------------|
| `SCROLL_THRESHOLD`        | `20`    | Min wheel deltaY to trigger any slide/panel transition |
| `SCROLL_UNLOCK_DELAY`     | `300`   | ms after scrollend before accepting next vertical gesture |
| `SCROLL_FALLBACK_TIMEOUT` | `1200`  | ms fallback unlock if scrollend never fires (vertical) |
| `CAROUSEL_UNLOCK_DELAY`   | `200`   | ms after scrollend before accepting next carousel gesture |
| `CAROUSEL_FALLBACK_TIMEOUT`| `1000` | ms fallback unlock if scrollend never fires (carousel) |
| `CARD_STAGGER_BASE`       | `100`   | ms delay before first More-slide card animates in     |
| `CARD_STAGGER_STEP`       | `55`    | ms added per card index for the cascade effect        |

## Scroll control architecture

All vertical navigation is owned by App.jsx's global wheel handler on `#slides`:
- Intercepts every wheel event with `{ passive: false }` + `preventDefault()` — prevents native scroll-snap from jumping multiple slides
- Enforces one-slide-at-a-time using `isScrolling` lock + `data-scroll-locked` attribute on `#slides`
- `scrollend` event (+ fallback timeout) drives unlock timing

Publications.jsx owns its horizontal carousel:
- Wheel handler on `#publications` calls `e.stopPropagation()` so App.jsx's handler doesn't also fire
- Sets `data-scroll-locked` on `#slides` when navigating, clearing it on unlock — App.jsx and Publications both check this attribute before acting
- `activePanelRef` avoids stale closure in the wheel handler

## Slide 2: Featured Publications Carousel

- Horizontal `scroll-snap-type: x mandatory` strip inside the vertical slide
- `deltaY` → horizontal panel nav; at carousel edges → vertical slide transition
- Arrow buttons at `left/right: 52px`; hidden on mobile

## Design tokens (src/index.css :root)

| Variable          | Value     | Usage                              |
|-------------------|-----------|------------------------------------|
| `--accent`        | `#2563eb` | Primary blue (tags, links, dots)   |
| `--accent-hover`  | `#1d4ed8` | Button hover                       |
| `--accent-bg`     | `#eff6ff` | Light blue background              |
| `--accent-border` | `#bfdbfe` | Borders, intern dots               |
| `--font`          | Inter      | Body font                         |
| `--pad`           | `7vw`      | Horizontal padding (`5vw` mobile) |

## Publications data (Publications.jsx)

Two arrays at the top of the file:

- **FEATURED** — horizontal carousel panels with video. Fields: `tag`, `title`, `authorsStr`, `venue`, `links[]`, `video` (mp4 URL)
- **MORE** — 4-col grid (2-col mobile) of small cards. Same fields, no `video`.

Link objects: `{ label, url }`. Common labels: `paper`, `arxiv`, `website`, `code`, `demo`, `report`.

## Experience data (Experience.jsx)

Arrays `WORK` and `EDU` at the top of the file. Item shape: `{ org, url?, role, desc?, years, type }`.

- `type: 'work'` → bright blue dot
- `type: 'intern'` → dim blue dot
- `type: 'edu'` → bright blue dot

## Mobile responsiveness

Breakpoint: `max-width: 768px` in each CSS module.

| Component           | Mobile adaptation                                      |
|---------------------|--------------------------------------------------------|
| `index.css`         | `--pad: 5vw`, `100dvh`                                 |
| `App.module.css`    | Side dots hidden                                       |
| `Nav.module.css`    | Smaller gap and font                                   |
| `Hero.module.css`   | `padding-top: 90px`, smaller h1/bio                    |
| `Publications.module.css` | Panel: flex-col, video full width; arrows hidden; more grid 2-col |
| `Experience.module.css`   | Single column, footer stacks vertically           |

## Owner info

- Name: Yichun Shi
- Current: Staff Research Scientist @ Meta Superintelligence Lab (2025–present)
- Previous: Staff Research Scientist @ ByteDance Seed (2021–2025)
- PhD: MSU Biometrics Lab, advised by Prof. Anil K. Jain
- BS: SJTU IEEE Honor Class
- Google Scholar: https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ
- GitHub: https://github.com/seasonSH
- CV: https://seasonsh.github.io/static/CV.pdf
