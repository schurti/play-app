import { defineGame } from '../types'

export default defineGame({
  id: 'eierkartonpingpong',
  title: 'Eierkarton-Ping-Pong',
  emoji: '🏓',
  category: 'lernen',
  minAge: 5,
  minutes: 15,
  items: ['Eierkarton', 'Ping-Pong-Bälle', 'Stifte'],
  tags: ['allein', 'gruppe'],
  order: 580,
  steps: [
    'Schreibt in jede Mulde eines Eierkartons eine Zahl von 1 bis 10.',
    'Stellt den Karton auf den Tisch.',
    'Lasst einen Ping-Pong-Ball einmal auf dem Tisch aufprallen, sodass er in eine Mulde springt.',
    'Zählt eure Punkte zusammen. Wer erreicht zuerst 20?',
  ],
  learn: 'Zielen, Zahlen lesen und addieren.',
})
