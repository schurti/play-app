import { defineGame } from '../types'

export default defineGame({
  id: 'hochtief',
  title: 'Hoch oder tief?',
  emoji: '🎚️',
  category: 'musik',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 210,
  steps: [
    'Eine Person singt einen Ton – mal ganz hoch, mal ganz tief.',
    'Bei hohen Tönen streckt ihr euch zur Decke.',
    'Bei tiefen Tönen geht ihr in die Hocke.',
    'Bei Tönen, die rauf- oder runterrutschen, bewegt ihr euch mit!',
  ],
  learn: 'Tonhöhen unterscheiden.',
})
