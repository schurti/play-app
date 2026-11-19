import { defineGame } from '../types'

export default defineGame({
  id: 'joghurtfarbe',
  title: 'Joghurt-Fingerfarbe',
  emoji: '🥣',
  category: 'malen',
  minAge: 1,
  maxAge: 4,
  minutes: 15,
  items: ['Teller', 'Papier'],
  tags: ['allein'],
  order: 270,
  steps: [
    'Rührt Naturjoghurt mit etwas Randen-, Spinat- oder Kurkuma-Saft an.',
    'Das Kind malt mit den Fingern auf einem Teller oder Papier.',
    'Danach: ab in die Badewanne!',
  ],
  learn: 'Erstes Malen mit essbarer Farbe.',
  adultNote: 'Darf ruhig auch probiert werden.',
})
