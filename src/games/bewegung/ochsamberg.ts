import { defineGame } from '../types'

export default defineGame({
  id: 'ochsamberg',
  title: 'Ochs am Berg',
  emoji: '🐂',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 230,
  steps: [
    'Eine Person steht mit dem Gesicht zur Wand und ruft: „Eins, zwei, drei – Ochs am Berg!“',
    'Währenddessen schleichen sich die anderen an.',
    'Am Ende des Spruchs dreht sie sich um: Alle müssen erstarren!',
    'Wer sich bewegt, muss zurück. Wer zuerst die Wand berührt, ist dran.',
  ],
  learn: 'Selbstkontrolle und Körperbeherrschung.',
})
