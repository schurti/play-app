import { defineGame } from '../types'

export default defineGame({
  id: 'steineeimer',
  title: 'Steine in den Eimer',
  emoji: '🪣',
  category: 'draussen',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: ['Eimer'],
  tags: ['allein'],
  order: 280,
  steps: [
    'Nehmt einen kleinen Eimer mit nach draussen.',
    'Das Kind sammelt grosse Steine, Tannzapfen oder Blätter.',
    'Ausschütten, anschauen, nochmal einfüllen.',
  ],
  learn: 'Sammeln, greifen und Natur entdecken.',
  adultNote: 'Kleine Teile verschluckt man leicht – immer dabeibleiben.',
})
