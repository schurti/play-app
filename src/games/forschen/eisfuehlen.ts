import { defineGame } from '../types'

export default defineGame({
  id: 'eisfuehlen',
  title: 'Eis fühlen',
  emoji: '🧊',
  category: 'forschen',
  minAge: 1,
  minutes: 10,
  items: ['Wasser', 'Teller'],
  tags: ['allein'],
  order: 350,
  steps: [
    'Legt ein paar Eiswürfel auf einen Teller.',
    'Das Kind berührt sie: Kalt! Glatt! Rutschig!',
    'Schaut zu, wie sie langsam schmelzen.',
  ],
  learn: 'Kalt und warm, fest und flüssig.',
})
