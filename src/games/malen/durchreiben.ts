import { defineGame } from '../types'

export default defineGame({
  id: 'durchreiben',
  title: 'Durchrubbel-Bilder',
  emoji: '🪙',
  category: 'malen',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 60,
  steps: [
    'Legt Münzen, Blätter, Schlüssel oder eine Gabel unter ein Papier.',
    'Rubbelt mit der Seite eines Stifts darüber.',
    'Wie von Zauberhand erscheinen die Muster!',
    'Ratet gegenseitig: Was lag darunter?',
  ],
  learn: 'Oberflächen und Muster entdecken.',
})
