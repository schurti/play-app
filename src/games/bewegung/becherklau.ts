import { defineGame } from '../types'

export default defineGame({
  id: 'becherklau',
  title: 'Becher-Klau',
  emoji: '🥤',
  category: 'bewegung',
  minAge: 4,
  minutes: 10,
  items: ['Becher', 'Schnur'],
  tags: ['gruppe'],
  order: 260,
  steps: [
    'Legt für jedes Kind mit Schnur einen Kreis als Zuhause auf den Boden, in die Mitte kommen 5 Becher.',
    'Auf „Los!“ holt jeder einen Becher nach dem anderen in sein Zuhause – immer nur einen pro Weg.',
    'Ist die Mitte leer, darf man Becher aus fremden Kreisen klauen.',
    'Wer zuerst 3 Becher im eigenen Kreis hat, ruft „Stopp!“ und gewinnt.',
  ],
  learn: 'Tempo, schnelles Entscheiden und vorausdenken.',
  variants: 'Draussen mit Pylonen oder Schuhen statt Bechern.',
})
