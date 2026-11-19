import { defineGame } from '../types'

export default defineGame({
  id: 'geraeuschgeschichte',
  title: 'Geräusche-Geschichte',
  emoji: '📢',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 250,
  steps: [
    'Vereinbart Geräusche für Wörter: „Tür“ = klopfen, „Regen“ = mit Fingern trommeln, „Hund“ = bellen.',
    'Eine Person erzählt eine Geschichte mit diesen Wörtern.',
    'Bei jedem Wort machen alle das passende Geräusch.',
  ],
  learn: 'Zuhören, reagieren und gemeinsam erzählen.',
})
