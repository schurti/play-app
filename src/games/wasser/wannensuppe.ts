import { defineGame } from '../types'

export default defineGame({
  id: 'wannensuppe',
  title: 'Badewannen-Suppe',
  emoji: '🍲',
  category: 'wasser',
  minAge: 2,
  minutes: 15,
  items: ['Töpfe', 'Löffel', 'Becher', 'Badeschaum'],
  tags: ['allein'],
  order: 180,
  steps: [
    'Gebt Töpfe, Kellen, Löffel und Becher in die Badewanne.',
    'Das Kind kocht Suppe: Wasser schöpfen, Schaum dazu, umrühren.',
    'Es serviert euch eine Portion: Was ist drin?',
    'Schmeckt (nur zum Schein!) und lobt den Koch.',
  ],
  learn: 'Rollenspiel, Schütten und Feinmotorik.',
})
