import { defineGame } from '../types'

export default defineGame({
  id: 'reporter',
  title: 'Reporter-Interview',
  emoji: '🎤',
  category: 'sprache',
  minAge: 4,
  minutes: 15,
  items: ['Löffel'],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Ein Kochlöffel ist das Mikrofon.',
    'Das Kind interviewt die Familie: „Was war dein bestes Ferienerlebnis?“',
    'Dann wird das Kind interviewt.',
    'Mit dem Handy aufnehmen und später zusammen anhören.',
  ],
  learn: 'Fragen stellen, zuhören und erzählen.',
})
