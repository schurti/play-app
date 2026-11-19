import { defineGame } from '../types'

export default defineGame({
  id: 'wasstimmtnicht',
  title: 'Was stimmt nicht?',
  emoji: '🤔',
  category: 'knobeln',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 60,
  steps: [
    'Eine Person erzählt eine kurze Geschichte mit Fehlern: „Im Winter baden wir im See und die Kühe legen Eier.“',
    'Die anderen rufen „Stopp!“ bei jedem Fehler.',
    'Wer findet alle Fehler?',
  ],
  learn: 'Genau zuhören und logisch denken.',
})
