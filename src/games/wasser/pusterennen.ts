import { defineGame } from '../types'

export default defineGame({
  id: 'pusterennen',
  title: 'Puste-Rennen in der Wanne',
  emoji: '🏁',
  category: 'wasser',
  minAge: 3,
  minutes: 10,
  items: ['Ping-Pong-Bälle', 'Strohhalme'],
  tags: ['gruppe'],
  order: 190,
  steps: [
    'Legt zwei Ping-Pong-Bälle an ein Ende der Badewanne.',
    'Jedes Kind pustet seinen Ball mit einem Strohhalm ans andere Ende.',
    'Wer ist zuerst da?',
    'Schwieriger: Ein Slalom um Badeenten oder Becher.',
  ],
  learn: 'Mundmotorik, Atemkontrolle und Spass.',
})
