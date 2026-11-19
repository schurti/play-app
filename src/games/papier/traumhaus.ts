import { defineGame } from '../types'

export default defineGame({
  id: 'traumhaus',
  title: 'Traumhaus planen',
  emoji: '🏡',
  category: 'papier',
  minAge: 5,
  minutes: 25,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 180,
  steps: [
    'Zeichnet ein grosses Haus mit vielen Zimmern.',
    'Jedes Zimmer bekommt eine Fantasie-Idee: Rutschbahn-Zimmer, Glace-Küche, Dschungel-Bad.',
    'Malt die Einrichtung dazu.',
    'Führt jemanden durch euer Traumhaus.',
  ],
  learn: 'Planen, Fantasie und erzählen.',
})
