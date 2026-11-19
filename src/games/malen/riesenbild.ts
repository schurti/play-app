import { defineGame } from '../types'

export default defineGame({
  id: 'riesenbild',
  title: 'Riesen-Gemeinschaftsbild',
  emoji: '🖼️',
  category: 'malen',
  minAge: 3,
  minutes: 30,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['gruppe'],
  order: 200,
  steps: [
    'Klebt mehrere Blätter am Boden zu einem riesigen Papier zusammen.',
    'Wählt ein Thema: Unterwasserwelt, Stadt, Dschungel.',
    'Alle malen gleichzeitig – jeder darf überall malen.',
    'Hängt das Kunstwerk auf und erzählt, was darauf passiert.',
  ],
  learn: 'Zusammenarbeiten und gemeinsam Ideen entwickeln.',
})
