import { defineGame } from '../types'

export default defineGame({
  id: 'ballontischduell',
  title: 'Ballon-Tisch-Duell',
  emoji: '🎈',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: ['Ballon'],
  tags: ['gruppe'],
  order: 330,
  steps: [
    'Setzt euch an zwei Seiten eines Tisches.',
    'Legt einen kleinen Ballon in die Mitte.',
    'Pustet ihn auf die andere Seite – Hände bleiben hinter dem Rücken!',
    'Fällt der Ballon auf der Seite des anderen hinunter, gibt es einen Punkt.',
  ],
  learn: 'Atemkraft und Reaktion.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen.',
})
