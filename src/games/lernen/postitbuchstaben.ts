import { defineGame } from '../types'

export default defineGame({
  id: 'postitbuchstaben',
  title: 'Zettel-Buchstaben',
  emoji: '📌',
  category: 'lernen',
  minAge: 5,
  minutes: 15,
  items: ['Papier', 'Stifte', 'Klebeband'],
  tags: ['allein'],
  order: 550,
  steps: [
    'Schreibt grosse Buchstaben (A, B, M …) auf ein Blatt und klebt es an die Wand.',
    'Schreibt die passenden kleinen Buchstaben auf kleine Zettel und verteilt sie im Raum.',
    'Das Kind sucht einen Zettel, rennt zur Wand und klebt ihn zum passenden Grossbuchstaben.',
    'Sind alle Paare gefunden?',
  ],
  learn: 'Gross- und Kleinbuchstaben zuordnen – in Bewegung.',
})
