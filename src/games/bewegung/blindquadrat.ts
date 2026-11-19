import { defineGame } from '../types'

export default defineGame({
  id: 'blindquadrat',
  title: 'Blind im Quadrat',
  emoji: '🫣',
  category: 'bewegung',
  minAge: 5,
  minutes: 10,
  items: ['Klebeband', 'Tuch'],
  tags: ['gruppe'],
  place: 'beides',
  order: 440,
  steps: [
    'Klebt für jede Person ein kleines Quadrat auf den Boden.',
    'Stellt euch hinein und verbindet die Augen.',
    'Dreht euch dreimal langsam um euch selbst und macht drei Schritte vorwärts und drei zurück.',
    'Augen auf: Wer steht noch im Quadrat?',
  ],
  learn: 'Gleichgewicht und Orientierung ohne Augen.',
})
