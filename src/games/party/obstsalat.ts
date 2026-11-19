import { defineGame } from '../types'

export default defineGame({
  id: 'obstsalat',
  title: 'Obstsalat',
  emoji: '🍓',
  category: 'party',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  place: 'beides',
  order: 120,
  steps: [
    'Alle sitzen im Stuhlkreis, ein Kind steht in der Mitte. Es gibt einen Stuhl zu wenig.',
    'Jeder bekommt eine Frucht: Apfel, Banane, Kirsche.',
    'Das Kind ruft eine Frucht – alle dieser Frucht tauschen die Plätze. Die Mitte versucht, einen Stuhl zu ergattern.',
    'Bei „Obstsalat!“ tauschen alle.',
  ],
  learn: 'Zuhören, Reaktion und Bewegung in der Gruppe.',
})
