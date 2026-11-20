import { defineGame } from '../types'

export default defineGame({
  id: 'autobruecke',
  title: 'Brücke für ein Auto',
  emoji: '🌉',
  category: 'bauen',
  minAge: 4,
  minutes: 15,
  items: ['Bausteine', 'Spielzeugauto', 'Bücher'],
  tags: ['allein'],
  order: 120,
  steps: [
    'Legt zwei Bücherstapel mit etwas Abstand hin: zwei Ufer.',
    'Baut aus Klötzen eine Brücke darüber.',
    'Hält sie, wenn das Auto darüberfährt?',
    'Macht den Abstand grösser. Wie muss die Brücke jetzt aussehen?',
  ],
  learn: 'Stabilität ausprobieren und Lösungen suchen.',
})
