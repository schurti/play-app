import { defineGame } from '../types'

export default defineGame({
  id: 'ferienreise',
  title: 'Ferien-Reise',
  emoji: '🧳',
  category: 'rollen',
  minAge: 4,
  minutes: 25,
  items: ['Handtuch', 'Kleider'],
  tags: ['gruppe'],
  order: 220,
  steps: [
    'Plant eine Reise: Strand, Berge oder Schnee?',
    'Packt eine Tasche mit passenden Kleidern.',
    'Reist mit dem Sofa-Flugzeug und landet.',
    'Legt das Handtuch aus und macht Ferien: baden, Glace essen, Postkarte malen.',
  ],
  learn: 'Planen, passende Dinge auswählen und erzählen.',
})
