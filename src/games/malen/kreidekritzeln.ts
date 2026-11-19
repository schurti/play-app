import { defineGame } from '../types'

export default defineGame({
  id: 'kreidekritzeln',
  title: 'Grosses Kritzelblatt',
  emoji: '🖍️',
  category: 'malen',
  minAge: 1,
  maxAge: 4,
  minutes: 10,
  items: ['Papier', 'Kreide', 'Klebeband'],
  tags: ['allein'],
  order: 280,
  steps: [
    'Klebt ein grosses Papier auf den Boden.',
    'Gebt dem Kind dicke Wachsmal- oder Kreidestifte.',
    'Kritzeln, tupfen, streichen – alles ist erlaubt.',
  ],
  learn: 'Erste Striche und Stiftgriff.',
})
