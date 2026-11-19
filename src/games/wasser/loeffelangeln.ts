import { defineGame } from '../types'

export default defineGame({
  id: 'loeffelangeln',
  title: 'Löffel-Angeln',
  emoji: '🎣',
  category: 'wasser',
  minAge: 3,
  minutes: 10,
  items: ['Löffel', 'Schüssel', 'Wasser'],
  tags: ['allein'],
  order: 70,
  steps: [
    'Lasst kleine Badetiere oder Korken in einer Schüssel Wasser schwimmen.',
    'Fischt sie mit einem Löffel heraus.',
    'Wer fängt in einer Minute am meisten?',
  ],
  learn: 'Auge-Hand-Koordination.',
})
