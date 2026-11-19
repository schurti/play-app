import { defineGame } from '../types'

export default defineGame({
  id: 'schwungstrecken',
  title: 'Schwung-Strecken',
  emoji: '🌊',
  category: 'papier',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 320,
  steps: [
    'Zeichnet mit einem hellen Stift Schwünge vor: Wellen, Zacken, Schlaufen, Bögen.',
    'Malt am Anfang einen Punkt und am Ende ein Ziel, z. B. ein Haus.',
    'Das Kind fährt die Linie mit einem dunklen Stift nach – ohne abzusetzen.',
    'Danach selbst Strecken erfinden.',
  ],
  learn: 'Stiftführung und flüssige Bewegungen als Vorübung zum Schreiben.',
})
