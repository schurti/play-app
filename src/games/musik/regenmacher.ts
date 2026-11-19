import { defineGame } from '../types'

export default defineGame({
  id: 'regenmacher',
  title: 'Regenmacher',
  emoji: '🌧️',
  category: 'musik',
  minAge: 4,
  minutes: 25,
  items: ['WC-Rollen', 'Alufolie', 'Reis', 'Klebeband'],
  tags: ['allein'],
  order: 80,
  steps: [
    'Nehmt eine lange Küchenpapier-Rolle oder klebt zwei WC-Rollen zusammen.',
    'Dreht ein langes Stück Alufolie zu einer Spirale und schiebt es hinein.',
    'Verschliesst ein Ende mit Klebeband, füllt eine Handvoll Reis ein und verschliesst das andere Ende.',
    'Dreht die Rolle langsam um – es klingt wie Regen!',
  ],
  learn: 'Klänge erzeugen und Geräusche nachahmen.',
})
