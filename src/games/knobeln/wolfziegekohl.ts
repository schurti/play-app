import { defineGame } from '../types'

export default defineGame({
  id: 'wolfziegekohl',
  title: 'Wolf, Ziege und Kohl',
  emoji: '🐺',
  category: 'knobeln',
  minAge: 6,
  minutes: 15,
  items: ['Kuscheltier', 'Papier'],
  tags: ['gruppe', 'leise'],
  order: 150,
  steps: [
    'Ein Bauer muss einen Wolf, eine Ziege und einen Kohlkopf über einen Fluss bringen.',
    'Das Boot trägt nur den Bauer und eine Sache.',
    'Bleiben Wolf und Ziege allein, frisst der Wolf die Ziege. Bleiben Ziege und Kohl allein, frisst die Ziege den Kohl.',
    'Spielt es mit Kuscheltieren und einem Papierfluss nach. Findet ihr den Weg?',
  ],
  learn: 'Logisches Denken und mehrere Schritte planen.',
  variants:
    'Lösung: Ziege hin, Wolf hin und Ziege zurück, Kohl hin, Ziege hin.',
})
