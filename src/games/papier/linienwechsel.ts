import { defineGame } from '../types'

export default defineGame({
  id: 'linienwechsel',
  title: 'Strich um Strich',
  emoji: '✍️',
  category: 'papier',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 90,
  steps: [
    'Die erste Person zeichnet einen einzigen Strich.',
    'Die nächste ergänzt einen Strich – egal wo.',
    'So geht es hin und her, ohne zu sprechen.',
    'Was ist am Ende entstanden? Gebt dem Bild einen Titel.',
  ],
  learn: 'Zusammenarbeit, Fantasie und Formen erkennen.',
})
