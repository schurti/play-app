import { defineGame } from '../types'

export default defineGame({
  id: 'schweigespiel',
  title: 'Wer ist am längsten still?',
  emoji: '🤐',
  category: 'unterwegs',
  minAge: 4,
  minutes: 5,
  items: [],
  tags: ['gruppe', 'leise'],
  place: 'beides',
  order: 100,
  steps: [
    'Alle sind gleichzeitig ganz still.',
    'Wer zuerst spricht oder lacht, hat verloren.',
    'Erlaubt sind nur Grimassen – aber dann wird es schwer!',
  ],
  learn: 'Selbstbeherrschung – und eine kurze Pause für alle.',
})
