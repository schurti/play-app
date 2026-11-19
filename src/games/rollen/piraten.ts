import { defineGame } from '../types'

export default defineGame({
  id: 'piraten',
  title: 'Piraten-Schiff',
  emoji: '🏴‍☠️',
  category: 'rollen',
  minAge: 3,
  minutes: 25,
  items: ['Decke', 'Kissen', 'Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 100,
  steps: [
    'Das Sofa ist euer Schiff, der Boden das Meer.',
    'Malt eine Schatzkarte und rollt sie zusammen.',
    'Segelt los: Ruft „Land in Sicht!“ und rudert mit Kissen.',
    'Versteckt einen Schatz auf einer „Insel“ und sucht ihn mit der Karte.',
  ],
  learn: 'Fantasie, Abenteuer und Karten lesen.',
})
