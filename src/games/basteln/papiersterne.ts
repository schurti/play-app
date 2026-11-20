import { defineGame } from '../types'

export default defineGame({
  id: 'papiersterne',
  title: 'Papier-Sterne',
  emoji: '⭐',
  category: 'basteln',
  minAge: 4,
  minutes: 20,
  items: ['Papier', 'Schnur', 'Stifte'],
  tags: ['allein', 'leise'],
  seasons: ['winter'],
  order: 340,
  steps: [
    'Faltet ein quadratisches Papier zweimal zur Hälfte und dann diagonal zu einem Dreieck.',
    'Schneidet kleine Zacken, Bögen und Löcher in die Kanten.',
    'Vorsichtig auffalten: ein Schneestern!',
    'Hängt die Sterne mit Schnur ans Fenster.',
  ],
  learn: 'Falten, Schneiden und Symmetrie.',
  adultNote:
    'Kleine Kinder zeichnen die Schnittlinien vor, ein Erwachsener hilft beim Schneiden.',
})
