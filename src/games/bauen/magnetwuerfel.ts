import { defineGame } from '../types'

export default defineGame({
  id: 'magnetwuerfel',
  title: 'Magnet-Würfel falten',
  emoji: '🧊',
  category: 'bauen',
  minAge: 4,
  minutes: 10,
  items: ['Magformers'],
  tags: ['allein', 'leise'],
  order: 80,
  steps: [
    'Legt sechs Quadrate flach hin, in Kreuzform: vier in einer Reihe, je eines oben und unten.',
    'Hebt die Seiten an und klappt sie hoch.',
    'Schnapp! Die Magnete halten zusammen: ein Würfel!',
    'Findet ihr noch eine andere flache Form, die zu einem Würfel wird?',
  ],
  learn: 'Geometrie: Aus Flächen werden Körper.',
  variants: 'Mit Dreiecken eine Pyramide falten.',
})
