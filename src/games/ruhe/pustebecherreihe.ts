import { defineGame } from '../types'

export default defineGame({
  id: 'pustebecherreihe',
  title: 'Puste-Becher-Reihe',
  emoji: '💨',
  category: 'ruhe',
  minAge: 5,
  minutes: 10,
  items: ['Becher', 'Ping-Pong-Bälle', 'Wasser'],
  tags: ['gruppe'],
  order: 310,
  steps: [
    'Stellt 5 Becher in eine Reihe und füllt sie bis zum Rand mit Wasser.',
    'Legt einen Ping-Pong-Ball in den ersten Becher.',
    'Pustet den Ball von Becher zu Becher bis ans Ende.',
    'Wer schafft es am schnellsten?',
  ],
  learn: 'Atem dosieren und zielen.',
  adultNote: 'Ein Handtuch unterlegen – es wird nass!',
})
