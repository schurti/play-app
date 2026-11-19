import { defineGame } from '../types'

export default defineGame({
  id: 'lachkette',
  title: 'Lach-Kette',
  emoji: '😆',
  category: 'gefuehle',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['gruppe'],
  order: 110,
  steps: [
    'Legt euch so auf den Boden, dass jeder Kopf auf dem Bauch des Nächsten liegt.',
    'Die erste Person sagt laut „Ha!“, die zweite „Ha-ha!“, die dritte „Ha-ha-ha!“ …',
    'Der Bauch hüpft – und bald lachen alle wirklich.',
  ],
  learn: 'Gemeinsam lachen tut gut.',
})
