import { defineGame } from '../types'

export default defineGame({
  id: 'knotenraetsel',
  title: 'Knoten-Rätsel zu zweit',
  emoji: '🪢',
  category: 'bewegung',
  minAge: 6,
  minutes: 15,
  items: ['Schnur'],
  tags: ['gruppe'],
  order: 340,
  steps: [
    'Bindet jeder Person eine Schnur locker um beide Handgelenke – die Schnüre sind dabei ineinander verschlungen.',
    'Jetzt seid ihr verbunden! Versucht, euch zu befreien, ohne die Schnur zu lösen oder zu zerschneiden.',
    'Tipp: Die Schlaufe einer Schnur muss unter der Handgelenk-Schlaufe der anderen Person durch.',
    'Geschafft? Zeigt den Trick jemand anderem.',
  ],
  learn: 'Räumliches Denken, Geduld und Zusammenarbeit.',
  adultNote: 'Die Schnur nur locker binden, nie am Hals.',
})
