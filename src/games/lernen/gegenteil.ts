import { defineGame } from '../types'

export default defineGame({
  id: 'gegenteil',
  title: 'Gegenteil-Spiel',
  emoji: '🔄',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 170,
  steps: [
    'Eine Person sagt ein Wort, z. B. „gross“.',
    'Das Kind ruft das Gegenteil: „klein!“',
    'Dazu passt eine Bewegung: gross machen, klein machen.',
    'Nach ein paar Runden tauschen.',
  ],
  learn: 'Wortschatz und Begriffe vergleichen.',
  variants:
    'Ideen: heiss–kalt, laut–leise, schnell–langsam, oben–unten, nass–trocken, voll–leer.',
})
