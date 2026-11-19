import { defineGame } from '../types'

export default defineGame({
  id: 'handfussfarben',
  title: 'Hand-Fuss-Farben',
  emoji: '🖐️',
  category: 'bewegung',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'gruppe'],
  order: 270,
  steps: [
    'Malt grosse Kreise in vier Farben aufs Papier und klebt sie verteilt auf den Boden.',
    'Legt fest: Rot = rechte Hand, Blau = linke Hand, Grün = rechter Fuss, Gelb = linker Fuss.',
    'Eine Person ruft eine Farbe – das Kind setzt den richtigen Körperteil darauf.',
    'Ohne die anderen loszulassen geht es weiter: Wie verknotet könnt ihr werden?',
  ],
  learn: 'Rechts und links, Farben zuordnen und Körperspannung.',
})
