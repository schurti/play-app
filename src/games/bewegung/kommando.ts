import { defineGame } from '../types'

export default defineGame({
  id: 'kommando',
  title: 'Kommando-Spiel',
  emoji: '🫡',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 60,
  steps: [
    'Die App ruft Befehle (auf Wunsch auch laut).',
    'Nur wenn „Kommando“ davor steht, macht ihr mit!',
    'Wer trotzdem mitmacht, bekommt einen Lachpunkt.',
  ],
  learn: 'Genau zuhören und sich bremsen können.',
  tool: 'commands',
})
