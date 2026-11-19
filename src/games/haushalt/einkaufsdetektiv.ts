import { defineGame } from '../types'

export default defineGame({
  id: 'einkaufsdetektiv',
  title: 'Einkaufs-Detektiv',
  emoji: '🛒',
  category: 'haushalt',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Malt eine Einkaufsliste mit Bildern.',
    'Im Laden sucht das Kind die Dinge im Regal.',
    'Vergleicht: Welche Packung ist grösser? Welche günstiger?',
    'Zuhause hilft das Kind beim Einräumen.',
  ],
  learn: 'Lesen, Vergleichen und erste Preise.',
})
