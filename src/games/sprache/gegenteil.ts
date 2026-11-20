import { defineGame } from '../types'

export default defineGame({
  id: 'gegenteil',
  title: 'Gegenteil-Spiel',
  emoji: '🔄',
  category: 'sprache',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 20,
  steps: [
    'Eine Person liest ein Wort aus der App vor, z. B. «gross».',
    'Das Kind ruft das Gegenteil: «klein!» Die Lösung steht in der App.',
    'Dazu passt eine Bewegung: gross machen, klein machen.',
    'Nach ein paar Runden tauschen.',
  ],
  learn: 'Wortschatz und Begriffe vergleichen.',
  variants:
    'Ideen: heiss–kalt, laut–leise, schnell–langsam, oben–unten, nass–trocken, voll–leer.',
  tool: 'term',
})
