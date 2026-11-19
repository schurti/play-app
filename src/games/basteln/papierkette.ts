import { defineGame } from '../types'

export default defineGame({
  id: 'papierkette',
  title: 'Papier-Girlande',
  emoji: '🎉',
  category: 'basteln',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Klebeband', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 250,
  steps: [
    'Schneidet viele bunte Papierstreifen.',
    'Klebt den ersten Streifen zu einem Ring.',
    'Steckt den nächsten Streifen durch und klebt ihn zu.',
    'Macht ein Muster – und hängt die Kette fürs nächste Fest auf.',
  ],
  learn: 'Muster, Zählen und Geduld.',
})
