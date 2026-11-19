import { defineGame } from '../types'

export default defineGame({
  id: 'pfannkuchen',
  title: 'Pfannkuchen-Formen',
  emoji: '🥞',
  category: 'kochen',
  minAge: 5,
  minutes: 30,
  items: ['Mehl', 'Ei', 'Schüssel'],
  tags: ['gruppe'],
  order: 130,
  steps: [
    'Rührt 200 g Mehl, 3 Eier, 400 ml Milch und eine Prise Salz glatt.',
    'Füllt den Teig in eine Flasche mit kleiner Öffnung.',
    'Ein Erwachsener „malt“ Buchstaben oder Tiere in die heisse Pfanne.',
    'Wenden, belegen, essen!',
  ],
  learn: 'Zutaten abmessen und Formen erkennen.',
  adultNote: 'Am Herd hilft das Kind nur mit Erwachsenen.',
})
