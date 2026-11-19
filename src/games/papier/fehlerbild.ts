import { defineGame } from '../types'

export default defineGame({
  id: 'fehlerbild',
  title: 'Fehler finden',
  emoji: '🔎',
  category: 'papier',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 150,
  steps: [
    'Zeichnet zweimal fast das gleiche Bild nebeneinander, z. B. ein Haus mit Baum.',
    'Baut im zweiten Bild heimlich drei Unterschiede ein: ein Fenster weniger, ein Vogel mehr …',
    'Die andere Person sucht die Fehler.',
    'Gefunden? Jetzt seid ihr dran!',
  ],
  learn: 'Genau vergleichen und Details wahrnehmen.',
})
