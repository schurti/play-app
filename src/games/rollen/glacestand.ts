import { defineGame } from '../types'

export default defineGame({
  id: 'glacestand',
  title: 'Glace-Stand',
  emoji: '🍦',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Becher', 'Socken', 'Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 250,
  steps: [
    'Rollt Socken als Glacekugeln und legt sie in Becher.',
    'Malt eine Preistafel mit Sorten und Preisen von 1 bis 5.',
    'Eine Person verkauft, die anderen bestellen.',
    'Bezahlt mit Papiergeld und zählt das Rückgeld.',
  ],
  learn: 'Zählen, Geld und Höflichkeit.',
})
