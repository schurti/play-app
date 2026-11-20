import { defineGame } from '../types'

export default defineGame({
  id: 'stuhltanz',
  title: 'Stuhl-Tanz',
  emoji: '🪑',
  category: 'party',
  minAge: 4,
  minutes: 15,
  items: ['Handy'],
  tags: ['gruppe'],
  order: 140,
  steps: [
    'Stellt Stühle im Kreis auf, einen weniger als Kinder.',
    'Spielt Musik. Alle tanzen um die Stühle herum.',
    'Musik aus: Schnell hinsetzen! Wer keinen Stuhl hat, wird DJ und macht die Musik.',
    'Nehmt jede Runde einen Stuhl weg.',
  ],
  learn: 'Reaktion, Hören und gut verlieren.',
  variants: 'Für Kleine: Gleich viele Stühle wie Kinder, niemand scheidet aus.',
})
