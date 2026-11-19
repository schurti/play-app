import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelmonster',
  title: 'Würfel-Monster',
  emoji: '👹',
  category: 'papier',
  minAge: 4,
  minutes: 15,
  items: ['Papier', 'Stifte'],
  tags: ['allein', 'gruppe'],
  order: 110,
  steps: [
    'Würfelt in der App: So viele Augen bekommt euer Monster.',
    'Würfelt nochmals: So viele Beine.',
    'Und nochmals: So viele Arme – oder Hörner, Zähne, Flecken.',
    'Zeichnet das Monster und gebt ihm einen Namen.',
  ],
  learn: 'Würfelbilder lesen, Zählen und Fantasie.',
  tool: 'dice',
})
