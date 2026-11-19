export interface PantoCard {
  kind: 'Tier' | 'Beruf' | 'Alltag'
  emoji: string
  word: string
}

const c = (
  kind: PantoCard['kind'],
  emoji: string,
  word: string,
): PantoCard => ({ kind, emoji, word })

export const PANTO: readonly PantoCard[] = [
  c('Tier', '🐘', 'Elefant'),
  c('Tier', '🐱', 'Katze'),
  c('Tier', '🐶', 'Hund'),
  c('Tier', '🐦', 'Vogel'),
  c('Tier', '🐟', 'Fisch'),
  c('Tier', '🐰', 'Hase'),
  c('Tier', '🦁', 'Löwe'),
  c('Tier', '🐴', 'Pferd'),
  c('Tier', '🐵', 'Affe'),
  c('Beruf', '👨‍🍳', 'Koch'),
  c('Beruf', '🚒', 'Feuerwehr'),
  c('Beruf', '👩‍⚕️', 'Ärztin'),
  c('Beruf', '👮', 'Polizist'),
  c('Beruf', '💇', 'Coiffeuse'),
  c('Beruf', '👨‍✈️', 'Pilot'),
  c('Beruf', '👩‍🌾', 'Bäuerin'),
  c('Beruf', '🧑‍🎨', 'Maler'),
  c('Alltag', '🪥', 'Zähne putzen'),
  c('Alltag', '👟', 'Schuhe binden'),
  c('Alltag', '🍕', 'Pizza essen'),
  c('Alltag', '🚲', 'Velo fahren'),
  c('Alltag', '😴', 'Schlafen'),
  c('Alltag', '🎁', 'Geschenk auspacken'),
  c('Alltag', '🍦', 'Glace schlecken'),
  c('Alltag', '🏊', 'Schwimmen'),
  c('Alltag', '⚽', 'Fussball spielen'),
  c('Alltag', '🧹', 'Staubsaugen'),
  c('Alltag', '☔', 'Im Regen stehen'),
]
