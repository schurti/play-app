import { defineGame } from '../types'

export default defineGame({
  id: 'laubsprung',
  title: 'Laub-Sprung',
  emoji: '🍂',
  category: 'draussen',
  minAge: 3,
  minutes: 20,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 200,
  steps: [
    'Recht im Herbst einen grossen Laubhaufen zusammen.',
    'Springt hinein, werft die Blätter hoch, versteckt euch darin.',
    'Wer findet das grösste, das röteste, das kleinste Blatt?',
    'Danach alles wieder zusammenrechen.',
  ],
  learn: 'Bewegung und Jahreszeiten erleben.',
  adultNote: 'Den Haufen vorher auf Äste und Steine prüfen.',
})
