import { defineGame } from '../types'

export default defineGame({
  id: 'pustefussball',
  title: 'Puste-Fussball',
  emoji: '⚽',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: ['Ping-Pong-Bälle'],
  tags: ['gruppe'],
  order: 300,
  steps: [
    'Legt euch bäuchlings gegenüber auf den Boden, etwa einen Meter auseinander.',
    'Legt einen Ping-Pong-Ball oder Wattebausch in die Mitte.',
    'Pustet ihn auf die Seite des anderen.',
    'Wer ihn über die Linie des anderen pustet, schiesst ein Tor!',
  ],
  learn: 'Atemkraft, Ausdauer und viel Lachen.',
})
