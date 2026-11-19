import { defineGame } from '../types'

export default defineGame({
  id: 'ballwalze',
  title: 'Ball-Walze',
  emoji: '🏐',
  category: 'ruhe',
  minAge: 3,
  minutes: 10,
  items: ['Ball'],
  tags: ['leise'],
  order: 260,
  steps: [
    'Das Kind legt sich bäuchlings auf eine weiche Unterlage.',
    'Rollt einen grossen Ball langsam und mit leichtem Druck über Rücken, Arme und Beine.',
    'Fragt nach: mehr Druck oder weniger?',
    'Dann tauschen – auch Erwachsene werden gern gewalzt!',
  ],
  learn: 'Druck spüren hilft dem Körper, ruhig zu werden.',
  adultNote: 'Nicht über Kopf und Nacken rollen.',
})
