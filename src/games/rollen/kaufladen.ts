import { defineGame } from '../types'

export default defineGame({
  id: 'kaufladen',
  title: 'Kaufladen',
  emoji: '🛒',
  category: 'rollen',
  minAge: 3,
  minutes: 25,
  items: ['Verpackungen', 'Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 30,
  steps: [
    'Sammelt leere Verpackungen: Müeslischachteln, Joghurtbecher, Eierkarton.',
    'Macht Preisschilder von 1 bis 10.',
    'Bastelt Geld aus Papier.',
    'Einkaufen, bezahlen, Rückgeld geben!',
  ],
  learn: 'Zahlen, Geld und Rollen wechseln.',
})
