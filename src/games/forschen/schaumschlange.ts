import { defineGame } from '../types'

export default defineGame({
  id: 'schaumschlange',
  title: 'Seifenschaum-Schlange',
  emoji: '🐍',
  category: 'forschen',
  minAge: 4,
  minutes: 15,
  items: ['PET-Flasche', 'Socken', 'Spülmittel', 'Wasser', 'Teller'],
  tags: ['allein', 'gruppe'],
  order: 340,
  steps: [
    'Schneidet den Boden einer Plastikflasche ab.',
    'Zieht eine alte Socke über das offene Ende.',
    'Taucht die Socke in eine Mischung aus Wasser und Spülmittel.',
    'Pustet durch den Flaschenhals: Eine lange Schaumschlange kriecht heraus!',
  ],
  learn: 'Luft und Seife bilden viele kleine Blasen.',
  adultNote:
    'Nur hineinpusten, nie daran saugen. Ein Erwachsener schneidet den Flaschenboden ab.',
})
