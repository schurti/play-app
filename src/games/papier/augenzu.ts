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
    'Jemand sagt an, was gezeichnet wird. Ideen gibt die App: «Zeichnet ein Schwein!»',
    'Dann Teil für Teil: «Jetzt die Ohren!», «Jetzt den Schwanz!»',
    'Augen auf und vergleichen. Wessen Bild ist am lustigsten?',
  ],
  learn: 'Vorstellungsvermögen, Körpergefühl – und viel Lachen.',
  tool: 'term',
})
