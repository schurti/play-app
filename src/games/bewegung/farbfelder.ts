import { defineGame } from '../types'

export default defineGame({
  id: 'farbfelder',
  title: 'Farbfelder-Hüpfen',
  emoji: '🟦',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'gruppe'],
  order: 280,
  steps: [
    'Malt Blätter in verschiedenen Farben aus und klebt sie verteilt auf den Boden.',
    'Die App zeigt eine Farbe.',
    'Alle springen so schnell wie möglich auf ein Feld in dieser Farbe.',
    'Gibt es die Farbe nicht? Dann alle einfrieren!',
  ],
  learn: 'Farben erkennen und schnell reagieren.',
  tool: 'color',
})
