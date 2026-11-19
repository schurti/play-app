import { defineGame } from '../types'

export default defineGame({
  id: 'fuehlweg',
  title: 'Fühl-Weg für die Füsse',
  emoji: '👣',
  category: 'ruhe',
  minAge: 3,
  minutes: 15,
  items: ['Handtuch', 'Kissen', 'Alufolie', 'Zeitung'],
  tags: ['allein', 'leise'],
  order: 200,
  steps: [
    'Legt verschiedene Dinge hintereinander auf den Boden: Handtuch, Kissen, Alufolie, Zeitung.',
    'Zieht die Socken aus.',
    'Geht langsam und mit geschlossenen Augen darüber – ein Erwachsener hält die Hand.',
    'Wie fühlt sich jedes Stück an?',
  ],
  learn: 'Tastsinn der Füsse und Gleichgewicht.',
})
