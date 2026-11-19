import { defineGame } from '../types'

export default defineGame({
  id: 'farben',
  title: 'Farben-Jagd',
  emoji: '🌈',
  category: 'lernen',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 10,
  steps: [
    'Die App zeigt eine Farbe.',
    'Lauft los und bringt etwas in dieser Farbe zurück.',
    'Wer zuerst zurück ist, bekommt einen Punkt. Allein: Schaffst du es, bevor jemand bis 20 gezählt hat?',
  ],
  learn: 'Farben erkennen und benennen.',
  variants:
    'Leichter: nur Rot, Blau und Gelb. Schwieriger: zwei Dinge in derselben Farbe bringen, eines gross, eines klein.',
  tool: 'color',
})
