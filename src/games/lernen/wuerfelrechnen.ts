import { defineGame } from '../types'

export default defineGame({
  id: 'wuerfelrechnen',
  title: 'Würfel-Rechnen',
  emoji: '➕',
  category: 'lernen',
  minAge: 5,
  minutes: 10,
  items: [],
  tags: ['allein', 'gruppe'],
  order: 270,
  steps: [
    'Stellt in der App auf „2 Würfel“.',
    'Würfelt und zählt beide Würfel zusammen.',
    'Wer zuerst das Ergebnis ruft, bekommt einen Punkt.',
    'Die App zeigt die Lösung zum Nachprüfen.',
  ],
  learn: 'Würfelbilder ohne Zählen erkennen und addieren.',
  variants: 'Leichter: nur einen Würfel und die Augen mit dem Finger antippen.',
  tool: 'dice',
})
