import { defineGame } from '../types'

export default defineGame({
  id: 'kloetzedomino',
  title: 'Klötze-Dominobahn',
  emoji: '➡️',
  category: 'bauen',
  minAge: 4,
  minutes: 15,
  items: ['Bausteine'],
  tags: ['allein'],
  order: 150,
  steps: [
    'Stellt längliche Klötze hochkant in eine Reihe, mit kleinem Abstand.',
    'Baut eine Kurve oder eine Abzweigung ein.',
    'Tippt den ersten Klotz an.',
    'Fallen alle? Wo hat es gestockt?',
  ],
  learn: 'Feinmotorik, Geduld und Kettenreaktion.',
})
