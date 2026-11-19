import { defineGame } from '../types'

export default defineGame({
  id: 'feuerwasser',
  title: 'Feuer, Wasser, Sturm',
  emoji: '🌪️',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Alle laufen oder tanzen durch den Raum.',
    'Bei „Feuer!“ rennen alle in eine Ecke.',
    'Bei „Wasser!“ klettern alle auf etwas Erhöhtes, z. B. das Sofa.',
    'Bei „Sturm!“ legen sich alle flach auf den Boden. Wer ist am schnellsten?',
  ],
  learn: 'Reaktion, Zuhören und Bewegungen merken.',
  variants: 'Neue Rufe erfinden: „Blitz!“ = einfrieren, „Erdbeben!“ = wackeln.',
})
