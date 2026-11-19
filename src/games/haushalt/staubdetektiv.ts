import { defineGame } from '../types'

export default defineGame({
  id: 'staubdetektiv',
  title: 'Staub-Detektiv',
  emoji: '🧦',
  category: 'haushalt',
  minAge: 3,
  minutes: 10,
  items: ['Socken'],
  tags: ['allein'],
  order: 60,
  steps: [
    'Zieht eine alte Socke über die Hand – das ist der Staubfänger.',
    'Sucht Staubverstecke: unter dem Regal, auf der Lampe, hinter dem Sofa.',
    'Wischt alles ab und zeigt eure graue Socke.',
    'Wer hat den meisten Staub gefangen?',
  ],
  learn: 'Genau hinschauen und mithelfen.',
})
