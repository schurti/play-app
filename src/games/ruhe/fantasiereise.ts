import { defineGame } from '../types'

export default defineGame({
  id: 'fantasiereise',
  title: 'Fantasie-Reise ans Meer',
  emoji: '🏖️',
  category: 'ruhe',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['leise'],
  order: 90,
  steps: [
    'Das Kind liegt bequem und schliesst die Augen.',
    'Erzählt ganz langsam: „Du gehst barfuss über warmen Sand … du hörst die Wellen …“',
    'Macht Pausen, damit das Kind sich alles vorstellen kann.',
    'Langsam zurückkommen: Finger bewegen, strecken, Augen auf.',
  ],
  learn: 'Vorstellungskraft und tiefe Entspannung.',
})
