import { defineGame } from '../types'

export default defineGame({
  id: 'geheimzeichen',
  title: 'Unser Geheim-Handschlag',
  emoji: '🤝',
  category: 'geschwister',
  minAge: 3,
  minutes: 10,
  items: [],
  tags: ['gruppe'],
  order: 40,
  steps: [
    'Erfindet zusammen einen Handschlag, den nur ihr zwei kennt.',
    'Zum Beispiel: abklatschen, Fäuste antippen, Finger wackeln, Hüfte stupsen.',
    'Übt ihn, bis ihr ihn blind könnt.',
    'Ab jetzt ist das euer Gruss, morgens, nach dem Kindergarten oder vor dem Schlafen.',
  ],
  learn: 'Zusammengehörigkeit und Bewegungsabfolgen merken.',
})
