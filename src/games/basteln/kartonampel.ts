import { defineGame } from '../types'

export default defineGame({
  id: 'kartonampel',
  title: 'Karton-Ampel',
  emoji: '🚦',
  category: 'basteln',
  minAge: 3,
  minutes: 25,
  items: ['Karton', 'Stifte', 'Papier'],
  tags: ['allein'],
  order: 300,
  steps: [
    'Schneidet aus einem Karton ein hohes Rechteck.',
    'Malt drei Kreise: rot, gelb, grün.',
    'Bastelt eine Klappe aus Papier, mit der man immer zwei Farben zudecken kann.',
    'Spielt Strassenverkehr: Autos halten bei Rot – und Fussgänger gehen, wenn die Autos stehen.',
  ],
  learn: 'Verkehrsregeln spielerisch lernen.',
})
