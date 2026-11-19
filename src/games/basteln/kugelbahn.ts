import { defineGame } from '../types'

export default defineGame({
  id: 'kugelbahn',
  title: 'Rollen-Kugelbahn',
  emoji: '🌀',
  category: 'basteln',
  minAge: 5,
  minutes: 25,
  items: ['WC-Rollen', 'Klebeband'],
  tags: ['allein'],
  order: 60,
  steps: [
    'Schneidet einige WC-Rollen der Länge nach auf – so entstehen Rinnen.',
    'Klebt sie schräg an eine Tür oder den Kühlschrank, eine unter die andere.',
    'Lasst eine Murmel, Erbse oder Papierkugel durchrollen.',
    'Baut um, bis die Kugel unten ankommt!',
  ],
  learn: 'Ausprobieren, Schräge und Schwerkraft.',
  adultNote: 'Erwachsene helfen beim Längs-Aufschneiden der Rollen.',
})
