import { defineGame } from '../types'

export default defineGame({
  id: 'bildbeschreiben',
  title: 'Bilder-Diktat',
  emoji: '🖼️',
  category: 'sprache',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Bücher'],
  tags: ['gruppe'],
  order: 160,
  steps: [
    'Eine Person beschreibt ein Bild aus einem Buch, ohne es zu zeigen.',
    'Die andere malt nur nach der Beschreibung.',
    'Vergleicht danach: Was stimmt, was fehlt?',
  ],
  learn: 'Genau beschreiben und zuhören.',
})
