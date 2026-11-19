import { defineGame } from '../types'

export default defineGame({
  id: 'schatzkarte',
  title: 'Schatzkarte zeichnen',
  emoji: '🗺️',
  category: 'papier',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Zeichnet einen Plan eurer Wohnung von oben: Zimmer, Bett, Tisch, Sofa.',
    'Versteckt einen kleinen Schatz und markiert das Versteck mit einem X.',
    'Gebt die Karte jemandem: Findet sie den Schatz?',
    'Dann tauschen.',
  ],
  learn: 'Räume von oben sehen – die Grundlage fürs Kartenlesen.',
})
