import { defineGame } from '../types'

export default defineGame({
  id: 'watteschaf',
  title: 'Watte-Schaf',
  emoji: '🐑',
  category: 'basteln',
  minAge: 3,
  minutes: 15,
  items: ['Watte', 'Leim', 'Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 210,
  steps: [
    'Malt einen grossen Kreis als Schafbauch, dazu Kopf und Beine.',
    'Streicht Leim in den Bauch.',
    'Zupft Watte in kleine Bäuschchen und klebt sie auf.',
    'Malt eine grüne Wiese dazu.',
  ],
  learn: 'Zupfen und Kleben stärkt die Finger.',
})
