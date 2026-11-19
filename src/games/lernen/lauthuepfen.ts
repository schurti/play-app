import { defineGame } from '../types'

export default defineGame({
  id: 'lauthuepfen',
  title: 'Laut-Hüpfen',
  emoji: '🦘',
  category: 'lernen',
  minAge: 4,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 430,
  steps: [
    'Wählt einen Laut, z. B. „M“.',
    'Eine Person sagt viele Wörter nacheinander.',
    'Beginnt ein Wort mit M, hüpfen alle hoch!',
    'Wer bei einem falschen Wort hüpft, macht eine Grimasse.',
  ],
  learn: 'Anlaute heraushören – ganz ohne Stift.',
})
