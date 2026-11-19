import { defineGame } from '../types'

export default defineGame({
  id: 'schwebenderball',
  title: 'Schwebender Ball',
  emoji: '🌬️',
  category: 'forschen',
  minAge: 4,
  minutes: 10,
  items: ['Föhn', 'Ping-Pong-Bälle'],
  tags: ['gruppe'],
  order: 300,
  steps: [
    'Stellt den Föhn auf kalt und richtet ihn nach oben.',
    'Legt einen Ping-Pong-Ball in den Luftstrom.',
    'Der Ball schwebt! Kippt den Föhn langsam schräg – fällt er herunter?',
    'Probiert es mit einem kleinen Ballon.',
  ],
  learn: 'Luftströmung kann Dinge tragen.',
  adultNote: 'Den Föhn nur auf kalter Stufe und nur mit Erwachsenen benutzen.',
})
