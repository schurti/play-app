import { defineGame } from '../types'

export default defineGame({
  id: 'wettertagebuch',
  title: 'Wetter-Tagebuch',
  emoji: '🌦️',
  category: 'lernen',
  minAge: 4,
  minutes: 5,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 460,
  steps: [
    'Zeichnet eine Tabelle mit den sieben Wochentagen.',
    'Schaut jeden Morgen aus dem Fenster.',
    'Malt das Wetter-Symbol in das Feld: Sonne, Wolke, Regen, Schnee, Wind.',
    'Am Sonntag zählt ihr: Welches Wetter gab es am meisten?',
  ],
  learn: 'Beobachten, Wochentage und erste Statistik.',
})
