import { defineGame } from '../types'

export default defineGame({
  id: 'staffel',
  title: 'Wäsche-Staffel',
  emoji: '👕',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Socken', 'Klammern', 'Schnur'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Spannt eine Schnur als Wäscheleine.',
    'Legt Socken in einen Korb auf der anderen Seite des Raums.',
    'Holt einzeln eine Socke, rennt zur Leine und hängt sie mit einer Klammer auf.',
    'Welches Team ist zuerst fertig?',
  ],
  learn: 'Fingerkraft, Tempo – und Hilfe beim Wäscheaufhängen.',
})
