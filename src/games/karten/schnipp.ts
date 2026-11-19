import { defineGame } from '../types'

export default defineGame({
  id: 'schnipp',
  title: 'Schnipp!',
  emoji: '👋',
  category: 'karten',
  minAge: 4,
  minutes: 10,
  items: ['Spielkarten'],
  tags: ['gruppe'],
  order: 70,
  steps: [
    'Jeder hat einen verdeckten Stapel.',
    'Abwechselnd legt jeder eine Karte offen in die Mitte.',
    'Liegen zwei gleiche Werte übereinander, schlagt mit der Hand drauf und ruft „Schnipp!“',
    'Wer zuerst schlägt, bekommt den ganzen Stapel.',
  ],
  learn: 'Reaktion und genaues Hinschauen.',
})
