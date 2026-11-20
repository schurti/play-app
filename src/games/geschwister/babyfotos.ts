import { defineGame } from '../types'

export default defineGame({
  id: 'babyfotos',
  title: 'Als wir klein waren',
  emoji: '👶',
  category: 'geschwister',
  minAge: 3,
  minutes: 15,
  items: ['Handy'],
  tags: ['gruppe', 'leise'],
  order: 50,
  steps: [
    'Schaut zusammen Babyfotos von beiden Kindern an.',
    'Ratet: Wer ist das auf dem Bild?',
    'Erzählt, was die Kinder damals schon konnten und was sie heute können.',
    'Wer sieht wem ähnlich?',
  ],
  learn: 'Selbstbild, Erinnerungen und Zusammengehörigkeit.',
  adultNote:
    'Die Erwachsenen erzählen gerne kleine Geschichten von damals dazu.',
})
