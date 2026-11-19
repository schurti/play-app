import { defineGame } from '../types'

export default defineGame({
  id: 'stadtlandfluss',
  title: 'Tier, Essen, Name',
  emoji: '📝',
  category: 'papier',
  minAge: 6,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 50,
  steps: [
    'Zeichnet Spalten: Tier, Essen, Name, Farbe.',
    'Die App zeigt einen Buchstaben.',
    'Jeder sucht zu jeder Spalte ein Wort mit diesem Anfangsbuchstaben – schreiben oder malen!',
    'Wer zuerst fertig ist, ruft „Stopp!“. Für jedes Wort gibt es einen Punkt.',
  ],
  learn: 'Anlaute, Wortschatz und erstes Schreiben.',
  variants:
    'Für Kinder, die noch nicht schreiben: Erwachsene schreiben mit, oder die Kinder malen ihre Wörter.',
  tool: 'letter',
})
