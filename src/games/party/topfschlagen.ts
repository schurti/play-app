import { defineGame } from '../types'

export default defineGame({
  id: 'topfschlagen',
  title: 'Topfschlagen',
  emoji: '🍲',
  category: 'party',
  minAge: 3,
  minutes: 15,
  items: ['Töpfe', 'Löffel', 'Tuch'],
  tags: ['gruppe'],
  order: 10,
  steps: [
    'Versteckt einen kleinen Preis unter einem umgedrehten Topf.',
    'Einem Kind werden die Augen verbunden, es bekommt einen Kochlöffel.',
    'Auf allen Vieren sucht es den Topf und klopft mit dem Löffel auf den Boden.',
    'Die anderen rufen „heiss“ oder „kalt“.',
  ],
  learn: 'Orientierung ohne Augen und Zuhören.',
})
