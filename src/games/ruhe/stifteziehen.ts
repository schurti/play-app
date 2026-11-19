import { defineGame } from '../types'

export default defineGame({
  id: 'stifteziehen',
  title: 'Stifte ziehen',
  emoji: '✏️',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: ['Stifte', 'Klebeband'],
  tags: ['gruppe', 'leise'],
  order: 280,
  steps: [
    'Stellt viele Stifte aufrecht in eine Klebebandrolle, sodass sie eng stehen.',
    'Zieht abwechselnd einen Stift heraus.',
    'Fällt ein anderer Stift um, ist die Runde vorbei.',
    'Wer hat am Schluss die meisten Stifte?',
  ],
  learn: 'Feinmotorik, Ruhe und vorsichtiges Planen.',
})
