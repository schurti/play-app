import { defineGame } from '../types'

export default defineGame({
  id: 'schattenfangen',
  title: 'Schatten fangen',
  emoji: '👤',
  category: 'draussen',
  minAge: 3,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Geht an einem sonnigen Tag nach draussen.',
    'Entdeckt euren Schatten: Was macht er, wenn ihr winkt oder hüpft?',
    'Versucht, auf den Schatten der anderen zu treten – wer getroffen ist, fängt als Nächstes.',
    'Macht Schatten-Figuren: zusammen ein Monster mit vier Armen!',
  ],
  learn: 'Licht und Schatten beobachten und Bewegung.',
})
