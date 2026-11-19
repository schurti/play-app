import { defineGame } from '../types'

export default defineGame({
  id: 'schneeengel',
  title: 'Schnee-Engel und Schneefamilie',
  emoji: '☃️',
  category: 'draussen',
  minAge: 3,
  minutes: 30,
  items: ['Kleider'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Legt euch rücklings in frischen Schnee und bewegt Arme und Beine – fertig ist der Schnee-Engel.',
    'Rollt Schneekugeln und baut eine ganze Schneemann-Familie: gross, mittel, klein.',
    'Gebt ihnen Gesichter aus Steinen und Ästen.',
    'Wie heisst eure Schneefamilie?',
  ],
  learn: 'Gestalten mit Schnee und Grössen vergleichen.',
})
