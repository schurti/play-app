import { defineGame } from '../types'

export default defineGame({
  id: 'schokowuerfeln',
  title: 'Schokoladen-Würfeln',
  emoji: '🍫',
  category: 'party',
  minAge: 5,
  minutes: 20,
  items: ['Teller', 'Löffel', 'Kleider'],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'In der Mitte liegt eine Schokolade auf einem Teller, daneben Mütze, Schal und Handschuhe.',
    'Reihum wird gewürfelt. Wer eine 6 hat, zieht alles an und isst mit Gabel und Messer Stück für Stück.',
    'Würfelt jemand anderes eine 6, ist er dran.',
  ],
  learn: 'Spannung, Geduld und Feinmotorik mit Handschuhen.',
  tool: 'dice',
})
