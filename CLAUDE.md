# Yichun Shi's Personal Homepage

React + Vite personal academic homepage for Yichun Shi (seasonSH).
Deployed to https://seasonsh.github.io via `../seasonSH.github.io` (master branch).
Source lives in this repo on the `source` branch.

## Deploy

```bash
./deploy.sh
```

Builds, copies dist to `../seasonSH.github.io`, commits and pushes.

## Structure

```
src/
  index.css              # Global CSS variables (:root), reset, base styles
  App.jsx                # Root: Nav > Hero > Publications > Experience > Footer
  components/
    Nav.jsx / .css       # Sticky top nav with section links
    Hero.jsx / .css      # Name, bio, links (Scholar, GitHub, LinkedIn, CV)
    Publications.jsx     # FEATURED (large cards with video) + MORE (2-col grid)
    Experience.jsx       # Timeline: work + edu items
    Footer.jsx / .css    # Contact / social links
```

## Design tokens (src/index.css :root)

| Variable         | Value     | Usage                        |
|------------------|-----------|------------------------------|
| `--accent`       | `#2563eb` | Primary blue (tags, links)   |
| `--accent-bg`    | `#eff6ff` | Light blue background        |
| `--accent-border`| `#bfdbfe` | Dimmed blue (intern dots)    |
| `--black`        | `#111`    | Main text                    |
| `--max-w`        | `860px`   | Max content width            |
| `--pad-x`        | `64px`    | Horizontal padding (24px mobile) |

## Publications data (Publications.jsx)

Two arrays at the top of the file:

- **FEATURED** — large cards with video thumbnail. Fields: `tag`, `title`, `authorsStr`, `venue`, `links[]`, `video` (mp4 URL)
- **MORE** — 2-col small cards. Same fields, no `video`.

Link objects: `{ label, url }`. Common labels: `paper`, `arxiv`, `website`, `code`, `demo`, `report`.

## Experience data (Experience.jsx)

Array of items: `{ org, url?, role, desc, years, type }`.

- `type: 'work'` → bright blue dot
- `type: 'edu'` → bright blue dot
- `type: 'intern'` → dim blue dot

## Owner info

- Name: Yichun Shi
- Current: Staff Research Scientist @ Meta Superintelligence Lab (2025–present)
- Previous: Staff Research Scientist @ ByteDance Seed (2021–2025)
- PhD: MSU Biometrics Lab, advised by Prof. Anil K. Jain
- BS: SJTU IEEE Honor Class
- Google Scholar: https://scholar.google.com/citations?hl=en&user=RXZChV0AAAAJ
- GitHub: https://github.com/seasonSH
- CV: https://seasonsh.github.io/static/CV.pdf
