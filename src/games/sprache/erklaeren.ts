import { defineGame } from '../types'

export default defineGame({
  id: 'erklaeren',
  title: 'Erklär-Raten',
  emoji: '🗣️',
  category: 'sprache',
  minAge: 4,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 200,
  steps: [
    'Wer dran ist, schaut heimlich auf die Karte in der App.',
    'Erkläre das Wort, ohne es zu sagen: Wie sieht es aus? Was macht man damit? Wo findet man es?',
    'Die anderen raten. Wer es errät, ist als Nächstes dran.',
    'Für Kleine die Bild-Karten nehmen, für Grosse und Erwachsene die Wort-Karten.',
  ],
  learn: 'Beschreiben, Wortschatz und genau zuhören.',
  variants:
    'Schwieriger: Nur mit Geräuschen erklären oder nur mit drei Wörtern.',
  tool: 'explain',
})
