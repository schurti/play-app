export interface Animal {
  emoji: string
  name: string
  article: 'ein' | 'eine'
  move: string
}

export const ANIMALS: readonly Animal[] = [
  {
    emoji: '🐸',
    name: 'Frosch',
    article: 'ein',
    move: 'In die Hocke und weit hüpfen.',
  },
  {
    emoji: '🦀',
    name: 'Krabbe',
    article: 'eine',
    move: 'Auf Händen und Füssen seitwärts laufen, Bauch nach oben.',
  },
  {
    emoji: '🐻',
    name: 'Bär',
    article: 'ein',
    move: 'Auf allen Vieren, Po hoch, langsam stapfen.',
  },
  {
    emoji: '🦩',
    name: 'Flamingo',
    article: 'ein',
    move: 'Auf einem Bein stehen – wie lange schaffst du es?',
  },
  {
    emoji: '🐍',
    name: 'Schlange',
    article: 'eine',
    move: 'Auf dem Bauch über den Boden kriechen.',
  },
  {
    emoji: '🦘',
    name: 'Känguru',
    article: 'ein',
    move: 'Mit beiden Füssen zusammen hüpfen.',
  },
  {
    emoji: '🐧',
    name: 'Pinguin',
    article: 'ein',
    move: 'Arme an den Körper und mit kleinen Schritten watscheln.',
  },
  {
    emoji: '🐘',
    name: 'Elefant',
    article: 'ein',
    move: 'Einen Arm als Rüssel schwingen und schwer stampfen.',
  },
  {
    emoji: '🐆',
    name: 'Gepard',
    article: 'ein',
    move: 'Auf der Stelle ganz schnell rennen.',
  },
  {
    emoji: '🐌',
    name: 'Schnecke',
    article: 'eine',
    move: 'Sooo langsam wie möglich bewegen.',
  },
  {
    emoji: '🦅',
    name: 'Adler',
    article: 'ein',
    move: 'Arme weit ausbreiten und durch den Raum gleiten.',
  },
  {
    emoji: '🐒',
    name: 'Affe',
    article: 'ein',
    move: 'Hüpfen, kratzen und „uh-uh-ah-ah“ rufen.',
  },
]
