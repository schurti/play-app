import { defineGame } from '../types'

export default defineGame({
  id: 'kennstdumich',
  title: 'Wie gut kennst du mich?',
  emoji: '🎤',
  category: 'geschwister',
  minAge: 4,
  minutes: 15,
  items: [],
  tags: ['gruppe'],
  order: 90,
  steps: [
    'Ein Kind wird gefragt, zum Beispiel: «Was isst deine Schwester am liebsten?»',
    'Es rät die Antwort.',
    'Das andere Kind verrät, ob es stimmt.',
    'Weitere Fragen: Lieblingsfarbe, Lieblingstier, wovor hat es Angst, was macht es am liebsten?',
  ],
  learn: 'Einander wahrnehmen und Interesse zeigen.',
})
