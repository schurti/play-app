import { defineGame } from '../types'

export default defineGame({
  id: 'zirkus',
  title: 'Zirkus-Vorstellung',
  emoji: '🎪',
  category: 'rollen',
  minAge: 4,
  minutes: 30,
  items: ['Klebeband', 'Tuch', 'Kleider'],
  tags: ['gruppe'],
  place: 'beides',
  order: 130,
  steps: [
    'Plant ein Programm: Seiltanz auf einer Klebebandlinie, Zauberei, wilde Löwen, Clowns.',
    'Verkleidet euch.',
    'Der Zirkusdirektor kündigt jede Nummer an.',
    'Das Publikum klatscht – und am Ende verbeugen sich alle.',
  ],
  learn: 'Auftreten, Mut und Planen.',
})
