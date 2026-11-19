import { defineGame } from '../types'

export default defineGame({
  id: 'huetchen',
  title: 'Hütchen-Spiel',
  emoji: '🥤',
  category: 'lernen',
  minAge: 3,
  minutes: 5,
  items: ['Becher'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Stellt drei Becher umgedreht nebeneinander.',
    'Versteckt unter einem Becher ein kleines Spielzeug – das Kind schaut zu.',
    'Schiebt die Becher langsam durcheinander.',
    'Wo ist das Spielzeug? Richtig geraten: Rollen tauschen!',
  ],
  learn: 'Aufmerksamkeit und mit den Augen verfolgen.',
  variants:
    'Schwieriger: schneller mischen oder einen vierten Becher dazunehmen.',
})
