import { defineGame } from '../types'

export default defineGame({
  id: 'wasserlupe',
  title: 'Wassertropfen-Lupe',
  emoji: '💧',
  category: 'forschen',
  minAge: 5,
  minutes: 10,
  items: ['Wasser', 'Backpapier', 'Zeitung'],
  tags: ['allein', 'leise'],
  order: 180,
  steps: [
    'Legt ein Stück Backpapier auf eine Zeitungsseite.',
    'Setzt mit dem Finger einen Wassertropfen darauf.',
    'Schaut durch den Tropfen auf die Buchstaben: Sie werden grösser!',
    'Probiert grosse und kleine Tropfen.',
  ],
  learn: 'Ein gewölbter Tropfen wirkt wie eine Lupe.',
})
