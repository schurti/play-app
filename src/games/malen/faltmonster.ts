import { defineGame } from '../types'

export default defineGame({
  id: 'faltmonster',
  title: 'Falt-Monster',
  emoji: '👾',
  category: 'malen',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Faltet ein Blatt in drei Teile.',
    'Malt oben einen Kopf und faltet ihn nach hinten.',
    'Gebt das Blatt weiter: Der Nächste malt den Bauch, dann die Beine.',
    'Auffalten und über euer Monster lachen.',
  ],
  learn: 'Fantasie und Zusammenarbeit.',
})
