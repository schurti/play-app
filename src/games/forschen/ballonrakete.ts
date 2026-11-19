import { defineGame } from '../types'

export default defineGame({
  id: 'ballonrakete',
  title: 'Ballon-Rakete',
  emoji: '🚀',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['Ballon', 'Schnur', 'Strohhalme', 'Klebeband'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Fädelt einen Strohhalm auf eine lange Schnur und spannt sie durch den Raum.',
    'Blast einen Ballon auf und haltet ihn zu.',
    'Klebt den Ballon mit Klebeband unter den Strohhalm.',
    '3, 2, 1 – loslassen! Die Rakete saust an der Schnur entlang.',
  ],
  learn: 'Ausströmende Luft schiebt den Ballon nach vorne.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen.',
})
