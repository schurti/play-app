import { defineGame } from '../types'

export default defineGame({
  id: 'schwammschiff',
  title: 'Schwamm-Schiffchen',
  emoji: '⛵',
  category: 'wasser',
  minAge: 4,
  minutes: 15,
  items: ['Schwamm', 'Papier'],
  tags: ['allein'],
  place: 'beides',
  order: 50,
  steps: [
    'Schneidet einen Schwamm zu einem Boot.',
    'Steckt einen Strohhalm oder Zahnstocher mit Papiersegel hinein.',
    'Lasst es in der Wanne schwimmen.',
    'Pustet in das Segel – fährt es?',
  ],
  learn: 'Schwimmen und Wind.',
})
