import { defineGame } from '../types'

export default defineGame({
  id: 'post',
  title: 'Post spielen',
  emoji: '✉️',
  category: 'rollen',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte', 'Karton'],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Bastelt einen Briefkasten aus einem Karton.',
    'Malt oder schreibt Briefe an Familienmitglieder.',
    'Die Postbotin verteilt alles an die richtigen Personen.',
  ],
  learn: 'Erste Buchstaben, Namen und Freude schenken.',
})
