import { defineGame } from '../types'

export default defineGame({
  id: 'eislaternen',
  title: 'Eis-Laternen',
  emoji: '🧊',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: ['Schüssel', 'Wasser', 'Becher'],
  tags: ['allein'],
  seasons: ['winter'],
  order: 150,
  steps: [
    'Füllt eine Schüssel mit Wasser und stellt einen Becher mit Steinen in die Mitte.',
    'Legt Beeren, Blätter oder Zweige ins Wasser.',
    'Stellt alles über Nacht nach draussen, wenn es friert.',
    'Am nächsten Tag Becher und Schüssel lösen – stellt ein Teelicht im Glas hinein.',
  ],
  learn: 'Wasser gefriert bei Kälte – und Natur wird zum Kunstwerk.',
  adultNote: 'Licht nur mit Erwachsenen; am besten ein LED-Teelicht verwenden.',
})
