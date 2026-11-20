import { defineGame } from '../types'

export default defineGame({
  id: 'fruchtglace',
  title: 'Frucht-Glace',
  emoji: '🍦',
  category: 'kochen',
  minAge: 3,
  minutes: 15,
  items: ['Obst', 'Becher', 'Löffel'],
  tags: ['allein'],
  seasons: ['sommer'],
  order: 80,
  steps: [
    'Zerdrückt Beeren oder Banane mit etwas Joghurt.',
    'Füllt alles in kleine Becher und steckt einen Löffel hinein.',
    'Ab ins Tiefkühlfach – für ein paar Stunden.',
    'Becher kurz unter warmes Wasser halten und herausziehen. Mmm!',
  ],
  learn: 'Wie aus flüssig fest wird – zum Essen.',
})
