import { defineGame } from '../types'

export default defineGame({
  id: 'dankepost',
  title: 'Danke-Post',
  emoji: '💌',
  category: 'gefuehle',
  minAge: 3,
  minutes: 20,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'leise'],
  order: 170,
  steps: [
    'Überlegt: Wer hat uns diese Woche eine Freude gemacht? Grosi, die Kindergärtnerin, der Nachbar?',
    'Das Kind malt eine Danke-Karte für diese Person.',
    'Ein Erwachsener schreibt auf, was das Kind sagen möchte.',
    'Bringt oder schickt die Karte zusammen.',
  ],
  learn: 'Dankbarkeit zeigen und an andere denken.',
})
