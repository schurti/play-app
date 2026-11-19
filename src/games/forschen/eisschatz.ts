import { defineGame } from '../types'

export default defineGame({
  id: 'eisschatz',
  title: 'Eis-Schatz',
  emoji: '🧊',
  category: 'forschen',
  minAge: 3,
  minutes: 20,
  items: ['Becher', 'Wasser', 'Salz'],
  tags: ['allein'],
  order: 50,
  steps: [
    'Am Vorabend: Ein kleines Spielzeug in einen Becher mit Wasser legen und einfrieren.',
    'Am nächsten Tag den Eisblock in eine Schüssel geben.',
    'Befreit den Schatz mit warmem Wasser, Salz und Löffeln.',
    'Was geht am schnellsten?',
  ],
  learn: 'Schmelzen: Wärme und Salz helfen.',
})
