import { defineGame } from '../types'

export default defineGame({
  id: 'ansagebauen',
  title: 'Bauen nach Ansage',
  emoji: '🗣️',
  category: 'bauen',
  minAge: 5,
  minutes: 15,
  items: ['Duplo'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Setzt euch Rücken an Rücken. Beide haben die gleichen Steine.',
    'Eines baut etwas und erklärt dabei jeden Schritt: «Ein roter Stein unten, darauf ein blauer, ganz links …»',
    'Das andere baut nur nach dem, was es hört.',
    'Umdrehen und vergleichen: Sieht es gleich aus?',
  ],
  learn:
    'Genau erklären, zuhören und Wörter für Lagen wie links, oben, daneben.',
})
