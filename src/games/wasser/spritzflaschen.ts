import { defineGame } from '../types'

export default defineGame({
  id: 'spritzflaschen',
  title: 'Spritzflaschen-Zielschiessen',
  emoji: '💦',
  category: 'wasser',
  minAge: 4,
  minutes: 20,
  items: ['PET-Flasche', 'Becher', 'Ping-Pong-Bälle', 'Wasser'],
  tags: ['gruppe'],
  place: 'beides',
  seasons: ['sommer'],
  order: 160,
  steps: [
    'Stecht ein kleines Loch in den Deckel einer PET-Flasche und füllt sie mit Wasser.',
    'Legt Ping-Pong-Bälle auf umgedrehte Becher.',
    'Drückt die Flasche: Wer spritzt die Bälle herunter?',
    'Geht nach jedem Treffer einen Schritt weiter weg.',
  ],
  learn: 'Zielen, Kraft dosieren und Abstand schätzen.',
  adultNote:
    'Das Loch sticht ein Erwachsener mit einer heissen Nadel oder einem Nagel.',
})
