import { defineGame } from '../types'

export default defineGame({
  id: 'coiffeur',
  title: 'Coiffeur-Salon',
  emoji: '💇',
  category: 'rollen',
  minAge: 3,
  minutes: 20,
  items: ['Kuscheltier', 'Tuch', 'Spiegel'],
  tags: ['gruppe'],
  order: 120,
  steps: [
    'Ein Kuscheltier oder ein Erwachsener ist die Kundschaft.',
    'Legt ein Tuch als Umhang um.',
    'Kämmen, frisieren, Haarspangen setzen und mit Fantasie-Schere schneiden.',
    'Zum Schluss: Spiegel zeigen und fragen, ob es gefällt.',
  ],
  learn: 'Sprechen, Höflichkeit und Feinmotorik.',
  adultNote: 'Keine echte Schere verwenden – nur Fantasie-Schnitte!',
})
