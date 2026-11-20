import { defineGame } from '../types'

export default defineGame({
  id: 'vorlesekino',
  title: 'Grosses Kind erzählt',
  emoji: '📖',
  category: 'geschwister',
  minAge: 3,
  minutes: 15,
  items: ['Bücher'],
  tags: ['gruppe', 'leise'],
  order: 70,
  steps: [
    'Das grössere Kind sucht ein Bilderbuch aus, das es gut kennt.',
    'Es «liest» dem kleineren vor, auch ohne lesen zu können: einfach zu den Bildern erzählen.',
    'Das kleinere darf Fragen stellen und auf Dinge zeigen.',
    'Danach erzählt das kleinere die Geschichte zurück.',
  ],
  learn: 'Erzählen, Wortschatz und Verantwortung.',
})
