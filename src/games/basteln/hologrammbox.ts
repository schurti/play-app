import { defineGame } from '../types'

export default defineGame({
  id: 'hologrammbox',
  title: 'Handy-Hologramm',
  emoji: '📱',
  category: 'basteln',
  minAge: 6,
  minutes: 30,
  items: ['Klarsichthülle', 'Papier', 'Klebeband', 'Handy'],
  tags: ['gruppe'],
  order: 310,
  steps: [
    'Schneidet aus einer festen Klarsichthülle vier gleiche Trapeze (unten ca. 6 cm, oben 1 cm, 3,5 cm hoch).',
    'Klebt sie zu einer umgedrehten Pyramide ohne Spitze zusammen.',
    'Sucht auf dem Handy ein „Hologramm-Video“, legt das Handy flach hin und stellt die Pyramide in die Mitte.',
    'Macht das Zimmer dunkel: Die Figur schwebt in der Pyramide!',
  ],
  learn: 'Spiegelung und Licht – ein kleiner Zaubertrick der Physik.',
  adultNote: 'Das Ausschneiden der Kunststoff-Teile macht ein Erwachsener.',
})
