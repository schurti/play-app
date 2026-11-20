import { defineGame } from '../types'

export default defineGame({
  id: 'wassermalen',
  title: 'Wasser-Malerei',
  emoji: '💧',
  category: 'malen',
  minAge: 3,
  minutes: 15,
  items: ['Wasser', 'Pinsel'],
  tags: ['allein'],
  seasons: ['sommer'],
  order: 100,
  steps: [
    'Nehmt einen Becher Wasser und einen Pinsel mit auf den Balkon oder vor die Tür.',
    'Malt auf Steine, Platten oder eine Wandtafel.',
    'Schaut zu, wie das Bild verschwindet – und malt ein neues.',
  ],
  learn: 'Verdunsten beobachten. Ganz ohne Putzen!',
})
