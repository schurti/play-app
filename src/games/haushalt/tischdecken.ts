import { defineGame } from '../types'

export default defineGame({
  id: 'tischdecken',
  title: 'Tisch decken nach Plan',
  emoji: '🍽️',
  category: 'haushalt',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Teller', 'Löffel'],
  tags: ['allein'],
  order: 50,
  steps: [
    'Malt ein Platz-Set: Teller in der Mitte, Gabel links, Messer und Löffel rechts, Glas oben.',
    'Legt das Bild an jeden Platz.',
    'Das Kind deckt den Tisch genau nach Plan.',
    'Bonus: Servietten zu Fächern falten.',
  ],
  learn: 'Links und rechts, Ordnung und Verantwortung.',
})
