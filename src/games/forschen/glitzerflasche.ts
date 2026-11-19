import { defineGame } from '../types'

export default defineGame({
  id: 'glitzerflasche',
  title: 'Glitzer-Flasche',
  emoji: '✨',
  category: 'forschen',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: ['PET-Flasche', 'Wasser', 'Öl', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 360,
  steps: [
    'Füllt eine Flasche halb mit Wasser und etwas Öl.',
    'Gebt Lebensmittelfarbe, Glitzer oder Perlen dazu.',
    'Deckel zukleben – und schütteln, drehen, staunen.',
  ],
  learn: 'Beobachten, wie sich Dinge bewegen. Beruhigt auch.',
  adultNote: 'Deckel gut zukleben.',
})
