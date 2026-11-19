import { defineGame } from '../types'

export default defineGame({
  id: 'popcorn',
  title: 'Popcorn-Knallen',
  emoji: '🍿',
  category: 'kochen',
  minAge: 4,
  minutes: 15,
  items: ['Töpfe'],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Gebt etwas Öl und eine Handvoll Popcorn-Mais in einen Topf mit Glasdeckel.',
    'Ein Erwachsener erhitzt den Topf.',
    'Hört zu: Wann knallt das erste Korn?',
    'Zählt die Knaller – und esst das Popcorn danach.',
  ],
  learn: 'Hitze verwandelt Mais – zum Hören und Staunen.',
  adultNote: 'Heisser Topf: Kinder schauen nur zu, Deckel bleibt zu.',
})
