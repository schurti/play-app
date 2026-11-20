import { defineGame } from '../types'

export default defineGame({
  id: 'fotoshooting',
  title: 'Fotoshooting',
  emoji: '📸',
  category: 'geschwister',
  minAge: 4,
  minutes: 15,
  items: ['Handy', 'Kleider'],
  tags: ['gruppe'],
  order: 160,
  steps: [
    'Ein Kind ist Fotograf, das andere das Model.',
    'Der Fotograf gibt Anweisungen: «Mach ein lustiges Gesicht! Jetzt wie ein Löwe!»',
    'Mit Hüten, Tüchern und Brillen verkleiden.',
    'Dann tauschen und zusammen die besten Bilder aussuchen.',
  ],
  learn: 'Fantasie, Ausdruck und Abwechseln.',
  adultNote: 'Ein Erwachsener gibt das Handy nur im Fotomodus.',
})
