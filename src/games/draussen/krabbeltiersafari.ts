import { defineGame } from '../types'

export default defineGame({
  id: 'krabbeltiersafari',
  title: 'Krabbeltier-Safari',
  emoji: '🐞',
  category: 'draussen',
  minAge: 3,
  minutes: 20,
  items: ['Lupe', 'Becher'],
  tags: ['allein', 'leise'],
  seasons: ['fruehling', 'sommer'],
  order: 70,
  steps: [
    'Hebt vorsichtig Steine und Holzstücke an.',
    'Schaut mit der Lupe: Asseln, Käfer, Würmer, Schnecken.',
    'Setzt ein Tier kurz in einen Becher und beobachtet es.',
    'Bringt jedes Tier genau dorthin zurück, wo ihr es gefunden habt.',
  ],
  learn: 'Kleine Tiere entdecken und respektvoll behandeln.',
})
