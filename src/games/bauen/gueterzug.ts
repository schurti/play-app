import { defineGame } from '../types'

export default defineGame({
  id: 'gueterzug',
  title: 'Güterzug-Lieferdienst',
  emoji: '📦',
  category: 'bauen',
  minAge: 3,
  minutes: 20,
  items: ['Brio-Bahn', 'Kuscheltier'],
  tags: ['gruppe'],
  order: 70,
  steps: [
    'Setzt Kuscheltiere als Kundschaft an die Bahnhöfe.',
    'Jedes Tier bestellt etwas: einen Klotz, einen Stift, eine Socke.',
    'Ladet die Ware auf den Zug und liefert sie aus.',
    'Das Tier bedankt sich und bestellt gleich wieder etwas Neues.',
  ],
  learn: 'Rollenspiel, Aufträge merken und Zuordnen.',
})
