import { defineGame } from '../types'

export default defineGame({
  id: 'minikino',
  title: 'Mini-Kino bauen',
  emoji: '🎬',
  category: 'rollen',
  minAge: 4,
  minutes: 30,
  items: ['Bausteine', 'Papier', 'Stifte', 'Kuscheltier'],
  tags: ['allein'],
  order: 270,
  steps: [
    'Baut aus Bausteinen eine Leinwand und Sitzreihen.',
    'Malt Kino-Billette und ein Plakat für euren Film.',
    'Setzt die Kuscheltiere als Publikum hin.',
    'Spielt den Film mit kleinen Figuren vor der Leinwand – oder erzählt ihn.',
  ],
  learn: 'Planen, Bauen und Geschichten erzählen.',
})
