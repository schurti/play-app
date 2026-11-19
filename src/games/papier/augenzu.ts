import { defineGame } from '../types'

export default defineGame({
  id: 'augenzu',
  title: 'Augen-zu-Zeichnen',
  emoji: '🙈',
  category: 'papier',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Alle schliessen die Augen.',
    'Jemand sagt an: „Zeichnet ein Schwein!“ – dann: „Jetzt die Ohren!“ – „Jetzt den Schwanz!“',
    'Augen auf und vergleichen.',
    'Wessen Schwein ist am lustigsten?',
  ],
  learn: 'Vorstellungsvermögen, Körpergefühl – und viel Lachen.',
})
