import { defineGame } from '../types'

export default defineGame({
  id: 'rasseldose',
  title: 'Rassel-Dose',
  emoji: '🥫',
  category: 'musik',
  minAge: 1,
  minutes: 10,
  items: ['PET-Flasche', 'Reis', 'Klebeband'],
  tags: ['allein'],
  order: 260,
  steps: [
    'Füllt etwas Reis oder Nudeln in eine kleine Flasche.',
    'Klebt den Deckel mit Klebeband fest zu.',
    'Schüttelt sie laut, leise, schnell, langsam.',
  ],
  learn: 'Laut und leise, Rhythmus spüren.',
  adultNote: 'Deckel gut zukleben.',
})
