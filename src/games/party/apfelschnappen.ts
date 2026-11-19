import { defineGame } from '../types'

export default defineGame({
  id: 'apfelschnappen',
  title: 'Apfel schnappen',
  emoji: '🍎',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: ['Obst', 'Schnur'],
  tags: ['gruppe'],
  place: 'beides',
  order: 100,
  steps: [
    'Hängt Äpfel oder Brötchen an Schnüren an eine Stange oder Wäscheleine.',
    'Hände auf den Rücken!',
    'Wer schafft es zuerst, ein Stück abzubeissen?',
  ],
  learn: 'Geschicklichkeit und Spass am Fest.',
})
