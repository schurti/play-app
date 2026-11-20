import { defineGame } from '../types'

export default defineGame({
  id: 'pfuetzenspringen',
  title: 'Pfützen-Springen',
  emoji: '☔',
  category: 'draussen',
  minAge: 3,
  minutes: 20,
  items: ['Kleider'],
  tags: ['allein', 'gruppe'],
  seasons: ['fruehling', 'herbst'],
  order: 60,
  steps: [
    'Zieht Regenkleider und Gummistiefel an.',
    'Sucht die grösste Pfütze.',
    'Wer macht den grössten Platscher? Wer springt, ohne nass zu werden?',
    'Messt die Tiefe mit einem Stock – wie tief ist die tiefste Pfütze?',
  ],
  learn: 'Bewegung bei jedem Wetter und Wasser erleben.',
})
