import { defineGame } from '../types'

export default defineGame({
  id: 'papierschiff',
  title: 'Papier-Schiff',
  emoji: '⛵',
  category: 'basteln',
  minAge: 5,
  minutes: 15,
  items: ['Zeitung', 'Schüssel', 'Wasser'],
  tags: ['allein'],
  order: 140,
  steps: [
    'Faltet zuerst einen Zeitungs-Hut (siehe Spiel „Zeitungs-Hut“).',
    'Zieht den Hut unten auseinander und drückt ihn zu einem Quadrat flach.',
    'Klappt beide unteren Spitzen nach oben, sodass ein Dreieck entsteht.',
    'Zieht das Dreieck wieder zu einem Quadrat auseinander und zieht die oberen Spitzen nach aussen – fertig ist das Schiff!',
    'Lasst es in einer Schüssel Wasser schwimmen.',
  ],
  learn: 'Genaues Falten und Schwimmen ausprobieren.',
})
