import { defineGame } from '../types'

export default defineGame({
  id: 'wochentage',
  title: 'Bilder-Wochenkalender',
  emoji: '📅',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein', 'leise'],
  order: 240,
  steps: [
    'Teilt ein Blatt in sieben Felder: Montag bis Sonntag.',
    'Malt in jedes Feld, was an diesem Tag passiert: Kindergarten, Schwimmen, Oma.',
    'Hängt den Kalender auf.',
    'Jeden Morgen zeigt ihr: Welcher Tag ist heute?',
  ],
  learn: 'Wochentage kennen und den Tagesablauf verstehen.',
})
