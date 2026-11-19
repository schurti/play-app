import { defineGame } from '../types'

export default defineGame({
  id: 'trommelsprache',
  title: 'Trommel-Sprache',
  emoji: '📯',
  category: 'musik',
  minAge: 5,
  minutes: 10,
  items: ['Töpfe', 'Löffel'],
  tags: ['gruppe'],
  order: 170,
  steps: [
    'Vereinbart Trommel-Zeichen: 2 Schläge = „Komm her“, 3 Schläge = „Setz dich“, schnelles Trommeln = „Tanzen!“.',
    'Eine Person trommelt, die anderen gehorchen.',
    'Erfindet zusammen neue Zeichen.',
  ],
  learn: 'Zeichen verstehen und sich ohne Worte verständigen.',
})
