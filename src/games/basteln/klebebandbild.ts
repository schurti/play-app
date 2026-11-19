import { defineGame } from '../types'

export default defineGame({
  id: 'klebebandbild',
  title: 'Klebeband abziehen',
  emoji: '🩹',
  category: 'basteln',
  minAge: 1,
  minutes: 10,
  items: ['Klebeband'],
  tags: ['allein', 'leise'],
  order: 320,
  steps: [
    'Klebt Streifen Malerklebeband kreuz und quer auf den Tisch oder Boden.',
    'Die Enden umknicken, damit sie gut zu greifen sind.',
    'Das Kind zieht sie ab und klebt sie auf ein Papier – ein Bild!',
  ],
  learn: 'Feinmotorik und Ausdauer.',
})
