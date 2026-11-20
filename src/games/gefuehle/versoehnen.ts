import { defineGame } from '../types'

export default defineGame({
  id: 'versoehnen',
  title: 'Versöhnungs-Ritual',
  emoji: '🤗',
  category: 'gefuehle',
  minAge: 3,
  minutes: 5,
  items: [],
  tags: ['gruppe'],
  order: 200,
  steps: [
    'Nach einem Streit: Erst durchatmen, bis alle ruhig sind.',
    'Jedes sagt, was es geärgert hat. Die anderen hören zu.',
    'Dann sagt jedes einen Satz: «Es tut mir leid, dass …»',
    'Zum Abschluss euer Versöhnungszeichen: Umarmung, Handschlag oder kleine Finger einhaken.',
  ],
  learn: 'Streit lösen und wieder zueinanderfinden.',
})
