import { defineGame } from '../types'

export default defineGame({
  id: 'paeckliweitergeben',
  title: 'Päckli-Weitergabe',
  emoji: '🎁',
  category: 'party',
  minAge: 3,
  minutes: 15,
  items: ['Zeitung', 'Klebeband', 'Handy'],
  tags: ['gruppe'],
  order: 200,
  steps: [
    'Wickelt eine kleine Überraschung in viele Schichten Zeitungspapier.',
    'Die Kinder sitzen im Kreis und geben das Päckli weiter, solange Musik läuft.',
    'Musik aus: Wer das Päckli hat, darf eine Schicht auspacken.',
    'Wer die letzte Schicht öffnet, findet die Überraschung.',
  ],
  learn: 'Warten, Weitergeben und Spannung.',
  adultNote:
    'Zwischen die Schichten kleine Zettel mit Aufgaben legen, damit alle etwas bekommen.',
})
