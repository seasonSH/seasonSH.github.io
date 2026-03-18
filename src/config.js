// ─── Scroll navigation ────────────────────────────────────────────────────────

// Minimum wheel deltaY to trigger a slide/panel transition.
// Increase to require more deliberate swipes; decrease to make it more sensitive.
export const SCROLL_THRESHOLD = 20

// After a vertical slide snap completes (scrollend fires), wait this long before
// accepting the next scroll gesture (ms). Prevents accidental double-jumps.
export const SCROLL_UNLOCK_DELAY = 300

// If scrollend never fires, force-unlock after this timeout (ms).
export const SCROLL_FALLBACK_TIMEOUT = 1200

// ─── Publications carousel ────────────────────────────────────────────────────

// Same as above but for horizontal panel navigation inside the carousel.
export const CAROUSEL_UNLOCK_DELAY = 200
export const CAROUSEL_FALLBACK_TIMEOUT = 1000

// ─── More-slide card animation ────────────────────────────────────────────────

// Delay before the first card animates in (ms).
export const CARD_STAGGER_BASE = 150

// Additional delay per card index (ms). Controls how fast the cascade plays out.
export const CARD_STAGGER_STEP = 150
