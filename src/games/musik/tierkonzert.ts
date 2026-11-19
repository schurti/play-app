import { defineGame } from '../types'

export default defineGame({
  id: 'tierkonzert',
  title: 'Tierstimmen-Konzert',
  emoji: '🐮',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Jeder wählt ein Tier: Kuh, Katze, Hund, Frosch, Esel.',
    'Der Dirigent zeigt auf ein Tier – nur dieses macht seine Stimme.',
    'Zeigt er auf alle: Das ganze Tierorchester singt!',
    'Wie klingt „Alle meine Entchen“ nur mit Muhen?',
  ],
  learn: 'Tierstimmen kennen und auf Einsätze achten.',
})
