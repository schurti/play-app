import { defineGame } from '../types'

export default defineGame({
  id: 'labyrinth',
  title: 'Labyrinth zeichnen',
  emoji: '🌀',
  category: 'papier',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Zeichnet einen Start und ein Ziel aufs Papier.',
    'Malt zuerst einen Weg vom Start zum Ziel.',
    'Dann viele Sackgassen und Wände rundherum.',
    'Tauscht die Labyrinthe und findet den Weg mit dem Finger oder Stift.',
  ],
  learn: 'Planen, räumliches Denken und Geduld.',
})
