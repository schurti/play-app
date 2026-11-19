import { defineGame } from '../types'

export default defineGame({
  id: 'baustelle',
  title: 'Baustelle',
  emoji: '🏗️',
  category: 'rollen',
  minAge: 3,
  minutes: 25,
  items: ['Karton', 'Verpackungen', 'Schüssel'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Sammelt Schachteln und leere Verpackungen als Bausteine.',
    'Setzt eine Schüssel als Bauhelm auf.',
    'Baut Türme, Brücken und Mauern.',
    'Wie hoch wird der Turm, bevor er umfällt?',
  ],
  learn: 'Bauen, Gleichgewicht und Formen.',
})
