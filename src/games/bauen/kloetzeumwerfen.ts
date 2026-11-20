import { defineGame } from '../types'

export default defineGame({
  id: 'kloetzeumwerfen',
  title: 'Bauen und umwerfen',
  emoji: '💥',
  category: 'bauen',
  minAge: 1,
  maxAge: 3,
  minutes: 5,
  items: ['Bausteine'],
  tags: ['gruppe'],
  order: 20,
  steps: [
    'Ein Erwachsener baut einen kleinen Turm aus drei, vier Klötzen.',
    'Das Kind darf ihn umstossen: «Bumm!»',
    'Gemeinsam die Klötze einsammeln und zählen: eins, zwei, drei …',
    'Jetzt baut das Kind und der Erwachsene wirft um.',
  ],
  learn: 'Ursache und Wirkung, erstes Stapeln.',
})
