import { defineGame } from '../types'

export default defineGame({
  id: 'wutballon',
  title: 'Wut-Ballon',
  emoji: '🎈',
  category: 'gefuehle',
  minAge: 4,
  minutes: 5,
  items: ['Ballon'],
  tags: ['allein', 'leise'],
  order: 50,
  steps: [
    'Wenn die Wut kommt: Pustet sie in einen Ballon – tief einatmen, lange auspusten.',
    'Haltet den vollen Ballon fest: So gross war die Wut!',
    'Lasst die Luft langsam pfeifend entweichen.',
    'Wie fühlt ihr euch jetzt?',
  ],
  learn: 'Wut ausatmen und sich beruhigen.',
  adultNote: 'Geplatzte Ballonstücke sofort wegräumen.',
})
