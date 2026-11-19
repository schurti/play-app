import { defineGame } from '../types'

export default defineGame({
  id: 'ballonhaare',
  title: 'Ballon-Zauber',
  emoji: '⚡',
  category: 'forschen',
  minAge: 3,
  minutes: 10,
  items: ['Ballon', 'Papier'],
  tags: ['allein'],
  order: 130,
  steps: [
    'Reibt einen Ballon kräftig an euren Haaren oder einem Wollpulli.',
    'Haltet ihn über eure Haare: Sie stehen zu Berge!',
    'Reisst Papier in kleine Schnipsel und haltet den Ballon darüber.',
    'Die Schnipsel springen hoch!',
  ],
  learn: 'Reibung macht elektrische Ladung.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen.',
})
