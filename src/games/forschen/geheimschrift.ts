import { defineGame } from '../types'

export default defineGame({
  id: 'geheimschrift',
  title: 'Geheimschrift',
  emoji: '🍋',
  category: 'forschen',
  minAge: 5,
  minutes: 20,
  items: ['Zitrone', 'Pinsel', 'Papier'],
  tags: ['allein', 'leise'],
  order: 150,
  steps: [
    'Presst eine Zitrone aus.',
    'Malt oder schreibt mit dem Pinsel und dem Saft eine geheime Botschaft.',
    'Lasst das Papier trocknen – nichts zu sehen!',
    'Ein Erwachsener erwärmt das Papier: Die Botschaft wird braun und erscheint.',
  ],
  learn: 'Wärme verändert den Zitronensaft und macht ihn sichtbar.',
  adultNote: 'Das Erwärmen mit Föhn oder Bügeleisen macht ein Erwachsener.',
})
