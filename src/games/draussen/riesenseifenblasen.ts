import { defineGame } from '../types'

export default defineGame({
  id: 'riesenseifenblasen',
  title: 'Riesen-Seifenblasen',
  emoji: '🫧',
  category: 'draussen',
  minAge: 3,
  minutes: 25,
  items: ['Spülmittel', 'Wasser', 'Schnur', 'Eimer'],
  tags: ['gruppe'],
  seasons: ['sommer'],
  order: 230,
  steps: [
    'Mischt im Eimer Wasser mit viel Spülmittel.',
    'Bindet eine lange Schnur als Schlaufe zwischen zwei Stöcke.',
    'Taucht die Schlaufe ein, zieht sie heraus und geht langsam rückwärts.',
    'Riesenblasen! Wer kann eine fangen?',
  ],
  learn: 'Seifenhaut und Luft beobachten.',
})
