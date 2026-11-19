import { defineGame } from '../types'

export default defineGame({
  id: 'wasbildetsich',
  title: 'Was wird das?',
  emoji: '🔍',
  category: 'papier',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Eine Person zeichnet ganz langsam ein Bild – Strich für Strich.',
    'Nach jedem Strich dürfen die anderen einmal raten.',
    'Wer es zuerst errät, bekommt einen Punkt und darf zeichnen.',
  ],
  learn: 'Formen früh erkennen und Vermutungen anstellen.',
})
