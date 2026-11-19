import { defineGame } from '../types'

export default defineGame({
  id: 'papiersaeulen',
  title: 'Papier-Säulen',
  emoji: '📚',
  category: 'forschen',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Klebeband', 'Bücher'],
  tags: ['allein'],
  order: 320,
  steps: [
    'Rollt drei Blätter Papier zu Röhren und klebt sie zu.',
    'Stellt sie aufrecht hin wie Säulen.',
    'Legt vorsichtig ein Buch nach dem anderen darauf.',
    'Wie viele Bücher tragen drei Blätter Papier? Probiert auch eckige Säulen.',
  ],
  learn: 'Formen machen stabil – runde Säulen tragen besonders viel.',
})
