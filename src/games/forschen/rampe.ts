import { defineGame } from '../types'

export default defineGame({
  id: 'rampe',
  title: 'Rampen-Rennen',
  emoji: '🛝',
  category: 'forschen',
  minAge: 5,
  minutes: 15,
  items: ['Karton'],
  tags: ['allein', 'gruppe'],
  order: 100,
  steps: [
    'Legt einen Karton oder ein Brett schräg auf ein paar Bücher.',
    'Lasst verschiedene Dinge herunterrollen: Korken, Apfel, Stift, Becher.',
    'Raten: Was ist am schnellsten? Was rollt gar nicht?',
    'Macht die Rampe steiler und testet noch einmal.',
  ],
  learn: 'Schräge, Form und Geschwindigkeit.',
})
