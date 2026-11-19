export type CategoryId =
  | 'lernen'
  | 'malen'
  | 'bewegung'
  | 'basteln'
  | 'musik'
  | 'forschen'
  | 'ruhe'
  | 'rollen'

export const CATEGORIES: Record<
  CategoryId,
  { name: string; emoji: string; color: string }
> = {
  lernen: { name: 'Lernen', emoji: '🧠', color: '#3B82F6' },
  malen: { name: 'Malen', emoji: '🎨', color: '#EC4899' },
  bewegung: { name: 'Bewegung', emoji: '🏃', color: '#10B981' },
  basteln: { name: 'Basteln', emoji: '✂️', color: '#F59E0B' },
  musik: { name: 'Musik', emoji: '🎵', color: '#A855F7' },
  forschen: { name: 'Forschen & Küche', emoji: '🔬', color: '#06B6D4' },
  ruhe: { name: 'Ruhe', emoji: '🌙', color: '#64748B' },
  rollen: { name: 'Rollenspiel', emoji: '🎭', color: '#EF4444' },
}

export const CATEGORY_IDS: readonly CategoryId[] = [
  'lernen',
  'malen',
  'bewegung',
  'basteln',
  'musik',
  'forschen',
  'ruhe',
  'rollen',
]
