import { defineGame } from '../types'

export default defineGame({
  id: 'muffins',
  title: 'Einfache Muffins',
  emoji: '🧁',
  category: 'kochen',
  minAge: 4,
  minutes: 40,
  items: ['Mehl', 'Ei', 'Schüssel', 'Löffel'],
  tags: ['gruppe'],
  order: 60,
  steps: [
    'Mischt 250 g Mehl, 2 TL Backpulver, 100 g Zucker und eine Prise Salz.',
    'Gebt 2 Eier, 100 ml Öl und 200 ml Milch dazu und rührt kurz um.',
    'Füllt den Teig in Muffinförmchen – mit Beeren oder Schokostückchen.',
    'Backt sie 20 Minuten bei 180 °C.',
  ],
  learn: 'Abmessen, Rühren und Geduld.',
  adultNote: 'Den Backofen bedient ein Erwachsener.',
})
