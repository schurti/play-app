import { defineGame } from '../types'

export default defineGame({
  id: 'superkraefte',
  title: 'Meine Superkräfte',
  emoji: '🦸',
  category: 'gefuehle',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 130,
  steps: [
    'Malt euch als Superheld oder Superheldin.',
    'Schreibt rundherum, was ihr gut könnt: trösten, schnell rennen, Lego bauen …',
    'Die Familie ergänzt weitere Superkräfte.',
    'Hängt das Plakat ins Zimmer.',
  ],
  learn: 'Selbstvertrauen und Stärken sehen.',
})
