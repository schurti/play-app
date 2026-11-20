import { defineGame } from '../types'

export default defineGame({
  id: 'schnellbauen',
  title: 'Drei-Minuten-Bauen',
  emoji: '⏱️',
  category: 'bauen',
  minAge: 4,
  minutes: 15,
  items: ['Duplo'],
  tags: ['gruppe'],
  order: 190,
  steps: [
    'Jemand nennt eine Aufgabe: ein Tier, ein Fahrzeug, ein Haus, ein Monster.',
    'Alle bauen gleichzeitig, aber nur drei Minuten lang.',
    'Stopp! Jedes Kind stellt sein Werk vor.',
    'Es gibt keine Gewinner, nur Applaus. Neue Aufgabe!',
  ],
  learn: 'Fantasie, schnelle Ideen und vor anderen erzählen.',
})
