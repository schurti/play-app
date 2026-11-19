import { defineGame } from '../types'

export default defineGame({
  id: 'zeitungsorchester',
  title: 'Zeitungs-Orchester',
  emoji: '📰',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: ['Zeitung'],
  tags: ['gruppe'],
  order: 220,
  steps: [
    'Jeder bekommt eine Zeitungsseite.',
    'Probiert Klänge aus: rascheln, wedeln, knüllen, reissen, klopfen.',
    'Spielt zusammen ein Gewitter: leises Rascheln = Regen, Wedeln = Wind, Reissen = Blitz!',
  ],
  learn: 'Mit Alltagsdingen Klänge gestalten.',
})
