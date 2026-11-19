import { defineGame } from '../types'

export default defineGame({
  id: 'etiketten',
  title: 'Wörter-Etiketten',
  emoji: '🏷️',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein'],
  order: 440,
  steps: [
    'Schreibt Wörter auf Zettel: TÜR, TISCH, BETT, LAMPE, SOFA.',
    'Klebt sie an die passenden Dinge in der Wohnung.',
    'Lest die Wörter jeden Tag im Vorbeigehen.',
    'Nach ein paar Tagen: Zettel abnehmen, mischen – findet ihr den richtigen Platz?',
  ],
  learn: 'Erste Wörter als Wortbild erkennen.',
})
