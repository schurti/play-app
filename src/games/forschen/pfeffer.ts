import { defineGame } from '../types'

export default defineGame({
  id: 'pfeffer',
  title: 'Pfeffer-Flucht',
  emoji: '🧂',
  category: 'forschen',
  minAge: 4,
  minutes: 5,
  items: ['Schüssel', 'Wasser', 'Pfeffer', 'Spülmittel'],
  tags: ['allein', 'leise'],
  order: 60,
  steps: [
    'Füllt eine flache Schüssel mit Wasser.',
    'Streut Pfeffer darüber.',
    'Tunkt einen Finger mit etwas Spülmittel ins Wasser.',
    'Schaut, wie der Pfeffer flieht!',
  ],
  learn: 'Spülmittel verändert die „Haut“ des Wassers.',
})
