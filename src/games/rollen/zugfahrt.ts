import { defineGame } from '../types'

export default defineGame({
  id: 'zugfahrt',
  title: 'Zug-Fahrt',
  emoji: '🚆',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 150,
  steps: [
    'Stellt Stühle in einer Reihe auf – das ist der Zug.',
    'Malt Fahrkarten.',
    'Die Kondukteurin kontrolliert die Billette und ruft die Stationen aus.',
    'Steigt an fantasievollen Orten aus: am Meer, im Zoo, bei der Oma.',
  ],
  learn: 'Rollen übernehmen und erzählen.',
})
