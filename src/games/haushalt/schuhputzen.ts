import { defineGame } from '../types'

export default defineGame({
  id: 'schuhputzen',
  title: 'Schuh-Putz-Station',
  emoji: '👞',
  category: 'haushalt',
  minAge: 4,
  minutes: 15,
  items: ['Zeitung', 'Schwamm', 'Wasser'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Legt Zeitung aus und stellt alle Schuhe darauf.',
    'Klopft den Dreck ab und wischt mit dem feuchten Schwamm.',
    'Stellt die sauberen Schuhe in Paaren ins Regal.',
    'Wer hat die meisten Paare geputzt?',
  ],
  learn: 'Sorgfalt und Ordnung.',
})
