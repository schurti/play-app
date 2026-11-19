import { defineGame } from '../types'

export default defineGame({
  id: 'buchstabenpost',
  title: 'Buchstaben-Post',
  emoji: '📮',
  category: 'lernen',
  minAge: 5,
  minutes: 20,
  items: ['Karton', 'Papier', 'Stifte'],
  tags: ['gruppe'],
  order: 420,
  steps: [
    'Bastelt aus einem Karton drei Briefkästen und schreibt auf jeden einen Buchstaben, z. B. M, S, B.',
    'Malt Bildkärtchen: Maus, Sonne, Ball, Mond, Sofa, Banane.',
    'Das Kind sagt jedes Bild laut und wirft es in den Briefkasten mit dem passenden Anfangsbuchstaben.',
  ],
  learn: 'Anlaute hören und Buchstaben zuordnen.',
})
