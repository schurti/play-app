import { defineGame } from '../types'

export default defineGame({
  id: 'rakete',
  title: 'Raketen-Flug',
  emoji: '🧑‍🚀',
  category: 'rollen',
  minAge: 4,
  minutes: 30,
  items: ['Karton', 'Alufolie', 'Stifte'],
  tags: ['allein'],
  order: 110,
  steps: [
    'Baut aus einem Karton eine Rakete und beklebt sie mit Alufolie.',
    'Malt Knöpfe und Bildschirme ins Cockpit.',
    'Countdown: 10, 9, 8 … Start!',
    'Landet auf dem Mond und erzählt, was ihr dort entdeckt.',
  ],
  learn: 'Fantasie, Weltraum und Zählen.',
})
