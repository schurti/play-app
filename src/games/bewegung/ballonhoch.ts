import { defineGame } from '../types'

export default defineGame({
  id: 'ballonhoch',
  title: 'Ballon in der Luft',
  emoji: '🎈',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['Ballon'],
  tags: ['allein', 'gruppe'],
  order: 140,
  steps: [
    'Blast einen Ballon auf.',
    'Haltet ihn in der Luft, ohne dass er den Boden berührt.',
    'Zählt die Berührungen. Wie viele schafft ihr?',
    'Schwieriger: nur mit dem Kopf, dem Ellbogen oder dem Knie.',
  ],
  learn: 'Auge-Hand-Koordination und Reaktion.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen – Erstickungsgefahr.',
})
