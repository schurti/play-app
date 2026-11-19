import { defineGame } from '../types'

export default defineGame({
  id: 'minigedicht',
  title: 'Mini-Gedicht',
  emoji: '📜',
  category: 'sprache',
  minAge: 6,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 110,
  steps: [
    'Wählt ein Thema: Katze, Regen, Pizza.',
    'Findet zwei Reimwörter: Katze – Tatze.',
    'Baut zwei Zeilen: „Die kleine Katze / hebt ihre Tatze.“',
    'Schreibt oder malt das Gedicht auf.',
  ],
  learn: 'Reime, Rhythmus und erstes Dichten.',
})
