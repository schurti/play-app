import { defineGame } from '../types'

export default defineGame({
  id: 'kartenkrieg',
  title: 'Wer hat die Grössere?',
  emoji: '⚔️',
  category: 'karten',
  minAge: 4,
  minutes: 15,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 50,
  steps: [
    'Verteilt alle Karten verdeckt auf zwei Stapel.',
    'Beide decken gleichzeitig eine Karte auf.',
    'Die höhere Karte gewinnt beide.',
    'Bei Gleichstand: noch eine Karte – wer gewinnt das Duell?',
  ],
  learn: 'Zahlen vergleichen ganz nebenbei.',
})
