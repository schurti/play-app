import { defineGame } from '../types'

export default defineGame({
  id: 'spritzbild',
  title: 'Spritz-Bild',
  emoji: '🌿',
  category: 'malen',
  minAge: 4,
  minutes: 20,
  items: ['Farbe', 'Pinsel', 'Papier', 'Zeitung'],
  tags: ['allein', 'leise'],
  order: 120,
  steps: [
    'Legt Blätter, Schlüssel oder eine Gabel auf ein Papier.',
    'Tunkt den Pinsel in Farbe und klopft ihn über dem Papier auf einen Finger – es spritzt kleine Tropfen.',
    'Wenn alles gesprenkelt ist, nehmt die Dinge vorsichtig weg.',
    'Zum Vorschein kommen weisse Umrisse!',
  ],
  learn: 'Positiv und Negativ: Was abgedeckt ist, bleibt weiss.',
  adultNote: 'Den Tisch mit Zeitung abdecken und alte Kleider anziehen.',
})
