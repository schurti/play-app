import { defineGame } from '../types'

export default defineGame({
  id: 'wetterbericht',
  title: 'Wetter-Bericht',
  emoji: '🌤️',
  category: 'rollen',
  minAge: 5,
  minutes: 20,
  items: ['Karton', 'Stifte'],
  tags: ['gruppe'],
  order: 160,
  steps: [
    'Schneidet aus einem Karton einen Fernseh-Rahmen.',
    'Malt Wettersymbole: Sonne, Regen, Wolke, Schnee.',
    'Schaut aus dem Fenster und berichtet das Wetter von heute.',
    'Dann die Fantasie-Vorhersage: „Morgen regnet es Glace!“',
  ],
  learn: 'Wetter beobachten und frei sprechen.',
})
