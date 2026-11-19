import { defineGame } from '../types'

export default defineGame({
  id: 'zahlenschnapp',
  title: 'Zahlen-Schnapp',
  emoji: '⏱️',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: ['Becher', 'Papier', 'Stifte', 'Klebeband'],
  tags: ['gruppe'],
  order: 520,
  steps: [
    'Klebt auf 6 bis 10 umgedrehte Becher oder Bauklötze Zettel mit den Zahlen 1 bis 10.',
    'Stellt sie gemischt auf den Tisch.',
    'Eine Person ruft eine Zahl – wer den richtigen Becher zuerst antippt, bekommt ihn.',
    'Für Grössere: „Wer findet 2 + 3?“',
  ],
  learn: 'Ziffern schnell erkennen und reagieren.',
})
