import { defineGame } from '../types'

export default defineGame({
  id: 'schattenuhr',
  title: 'Schatten-Uhr',
  emoji: '☀️',
  category: 'forschen',
  minAge: 5,
  minutes: 10,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 230,
  steps: [
    'Klebt an einem sonnigen Morgen ein Papier aufs Fensterbrett und stellt einen Becher darauf.',
    'Zeichnet den Schatten nach und schreibt die Uhrzeit dazu.',
    'Wiederholt das jede Stunde.',
    'Am Abend: Wohin ist der Schatten gewandert?',
  ],
  learn: 'Die Sonne wandert – und mit ihr der Schatten.',
})
