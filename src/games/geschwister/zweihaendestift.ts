import { defineGame } from '../types'

export default defineGame({
  id: 'zweihaendestift',
  title: 'Zwei Hände, ein Stift',
  emoji: '✍️',
  category: 'geschwister',
  minAge: 4,
  minutes: 10,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe', 'leise'],
  order: 100,
  steps: [
    'Beide Kinder halten zusammen einen dicken Stift.',
    'Ohne zu sprechen malt ihr zusammen ein Haus, eine Sonne oder einen Baum.',
    'Wer führt, wer folgt? Das merkt ihr nur am Stift.',
    'Schaut das Bild an und lacht über die krummen Linien.',
  ],
  learn: 'Feinfühligkeit und Zusammenarbeit ohne Worte.',
})
