import { defineGame } from '../types'

export default defineGame({
  id: 'puppe',
  title: 'Socken-Puppe',
  emoji: '🧦',
  category: 'basteln',
  minAge: 4,
  minutes: 20,
  items: ['Socken', 'Papier', 'Stifte', 'Klebeband'],
  tags: ['allein'],
  order: 50,
  steps: [
    'Zieht eine alte Socke über die Hand.',
    'Malt Augen, Nase und Zunge auf Papier und klebt sie an.',
    'Gebt der Puppe einen Namen und eine Stimme.',
    'Spielt ein Theater hinter dem Sofa.',
  ],
  learn: 'Sprechen, Gefühle ausdrücken und Fantasie.',
})
