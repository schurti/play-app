import { defineGame } from '../types'

export default defineGame({
  id: 'aufraeumdisco',
  title: 'Aufräum-Disco',
  emoji: '🪩',
  category: 'haushalt',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 70,
  steps: [
    'Startet die Musik in der App.',
    'Solange Musik läuft, wird aufgeräumt – tanzend!',
    'Stoppt die Musik, frieren alle ein.',
    'Ist das Zimmer aufgeräumt, bevor drei Lieder um sind?',
  ],
  learn: 'Aufräumen mit Spass und Tempo.',
  tool: 'dance',
})
