import { defineGame } from '../types'

export default defineGame({
  id: 'rollenrennen',
  title: 'Klopapierrollen-Rennen',
  emoji: '🧻',
  category: 'bewegung',
  minAge: 3,
  minutes: 10,
  items: ['WC-Rollen', 'Kuscheltier'],
  tags: ['gruppe'],
  order: 300,
  steps: [
    'Jedes Kind bekommt eine Klopapier- oder WC-Rolle und ein kleines Tier.',
    'Legt das Tier auf den Boden vor die Rolle.',
    'Rollt die Rolle mit den Händen, sodass sie das Tier nach vorne schiebt.',
    'Wer bringt sein Tier zuerst ins Ziel?',
  ],
  learn: 'Feinmotorik, Konzentration – und ganz viel Lachen.',
})
