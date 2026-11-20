import { defineGame } from '../types'

export default defineGame({
  id: 'einsbissechs',
  title: 'Eins bis Sechs',
  emoji: '🎲',
  category: 'karten',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 180,
  steps: [
    'Jedes Kind schreibt oder malt die Zahlen 1 bis 6 untereinander auf ein Papier.',
    'Würfelt reihum. Wer die Eins würfelt, streicht sie durch.',
    'Danach braucht man die Zwei, dann die Drei und so weiter.',
    'Wer zuerst bis zur Sechs kommt, ruft «Fertig!».',
  ],
  learn: 'Zahlenfolge und Würfelbilder erkennen.',
  tool: 'dice',
})
