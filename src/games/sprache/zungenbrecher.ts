import { defineGame } from '../types'

export default defineGame({
  id: 'zungenbrecher',
  title: 'Zungenbrecher',
  emoji: '👅',
  category: 'sprache',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 50,
  steps: [
    'Sprecht einen Zungenbrecher erst langsam: „Fischers Fritz fischt frische Fische.“',
    'Dann immer schneller.',
    'Wer schafft ihn dreimal hintereinander ohne Fehler?',
    'Weitere: „Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.“',
  ],
  learn: 'Deutliche Aussprache und Mundmotorik.',
})
