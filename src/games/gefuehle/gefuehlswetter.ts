import { defineGame } from '../types'

export default defineGame({
  id: 'gefuehlswetter',
  title: 'Gefühls-Wetterbericht',
  emoji: '🌦️',
  category: 'gefuehle',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['gruppe', 'leise'],
  order: 30,
  steps: [
    'Jeder sagt, wie das Wetter in seinem Bauch ist: sonnig, wolkig, gewittrig, regnerisch?',
    'Wer mag, erzählt warum.',
    'Die anderen hören nur zu – kein „Das ist doch nicht schlimm“.',
  ],
  learn: 'Gefühle benennen ohne Druck.',
})
