import { defineGame } from '../types'

export default defineGame({
  id: 'restaurant',
  title: 'Restaurant spielen',
  emoji: '🍽️',
  category: 'rollen',
  minAge: 3,
  minutes: 25,
  items: ['Papier', 'Stifte', 'Teller'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Malt eine Speisekarte mit Preisen.',
    'Eine Person ist Kellner, eine Koch, der Rest sind Gäste.',
    'Bestellen, servieren – echte Brotstücke oder Fantasie-Essen.',
    'Am Ende wird mit Knöpfen oder Papiergeld bezahlt.',
  ],
  learn: 'Sprechen, Höflichkeit und erstes Rechnen.',
})
