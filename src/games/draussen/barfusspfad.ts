import { defineGame } from '../types'

export default defineGame({
  id: 'barfusspfad',
  title: 'Barfuss-Pfad',
  emoji: '🦶',
  category: 'draussen',
  minAge: 3,
  minutes: 20,
  items: [],
  tags: ['gruppe'],
  order: 170,
  steps: [
    'Sucht verschiedene Untergründe: Wiese, Moos, Sand, Kies, Rinde.',
    'Zieht Schuhe und Socken aus.',
    'Geht langsam darüber – auch mit geschlossenen Augen an der Hand.',
    'Was fühlt sich weich, kalt, pieksig oder warm an?',
  ],
  learn: 'Tastsinn der Füsse und Körpergefühl.',
  adultNote: 'Vorher den Boden auf Scherben und Dornen absuchen.',
})
