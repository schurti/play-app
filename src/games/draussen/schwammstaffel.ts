import { defineGame } from '../types'

export default defineGame({
  id: 'schwammstaffel',
  title: 'Schwamm-Staffel',
  emoji: '🧽',
  category: 'draussen',
  minAge: 4,
  minutes: 20,
  items: ['Schwamm', 'Eimer', 'Becher'],
  tags: ['gruppe'],
  seasons: ['sommer'],
  order: 220,
  steps: [
    'Stellt an einem heissen Tag einen vollen und einen leeren Eimer weit auseinander.',
    'Taucht den Schwamm ins Wasser, rennt los und drückt ihn über dem leeren Eimer aus.',
    'Welches Team füllt seinen Becher zuerst bis zur Markierung?',
    'Nass werden ist erlaubt!',
  ],
  learn: 'Tempo, Teamarbeit und Wasser erleben.',
})
