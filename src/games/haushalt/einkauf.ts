import { defineGame } from '../types'

export default defineGame({
  id: 'einkauf',
  title: 'Bilder-Einkaufsliste',
  emoji: '📝',
  category: 'haushalt',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 20,
  steps: [
    'Malt eine Einkaufsliste mit 5 Dingen aus dem Vorrat, z. B. Apfel, Nudeln, Milch.',
    'Das Kind sucht alles in der Küche zusammen.',
    'Abhaken – und danach alles wieder einräumen.',
  ],
  learn: 'Bilder lesen, planen und Ordnung halten.',
})
