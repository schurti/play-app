import { defineGame } from '../types'

export default defineGame({
  id: 'geschichte',
  title: 'Geschichten-Würfel',
  emoji: '📖',
  category: 'rollen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['allein', 'leise'],
  order: 60,
  steps: [
    'Würfelt eine Figur, einen Ort und ein Problem.',
    'Erzählt daraus zusammen eine Geschichte: Jeder sagt abwechselnd einen Satz.',
    'Wie geht sie gut aus?',
  ],
  learn: 'Erzählen, Wortschatz und Fantasie.',
  tool: 'story',
})
