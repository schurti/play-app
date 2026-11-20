import { EXPLAIN } from '../explain/cards'
import {
  DINGE,
  GERAEUSCHE,
  LIEDER,
  SZENE_MIT,
  SZENE_WER,
  SZENE_WO,
} from './catalog/alltag'
import { MALEN_KNIFFLIG, MALEN_LEICHT } from './catalog/malen'
import { PANTO_LEICHT, PANTO_SCHWER } from './catalog/pantomime'
import {
  GEFUEHLE,
  GEGENTEILE,
  OBERBEGRIFFE,
  REIME,
  TEEKESSELCHEN,
} from './catalog/sprache'
import type { TermCard } from './parse'

export interface TermLevel {
  label: string
  note?: string
  cards: readonly TermCard[]
}

export interface TermDeck {
  /** Verdeckt: nur wer dran ist, schaut auf die Karte. */
  secret: boolean
  /** Ratespiel: Knöpfe «Erraten!» und «Weiter» statt «Neu». */
  guess: boolean
  /** Kurzer Auftrag unter dem Begriff. */
  task: string
  levels: readonly TermLevel[]
  /** Zusatz (Lösung, Beispiele) sofort zeigen oder erst auf Tipp. */
  hint?: 'show' | 'tap'
  hintLabel?: string
  /** Beschriftung des Neu-Knopfs bei offenen Karten. */
  next?: string
}

const bild = (...kinds: string[]) =>
  EXPLAIN.bild.filter((c) => kinds.includes(c.kind))
const wort = (...kinds: string[]) =>
  EXPLAIN.wort.filter((c) => kinds.includes(c.kind))

/** Alle Kombinationen aus Wer, Mit und Wo – über 7000 Bilder. */
const SZENEN: TermCard[] = SZENE_WER.flatMap((wer) =>
  SZENE_MIT.flatMap((mit) =>
    SZENE_WO.map((wo) => ({ word: `${wer} ${mit} ${wo}` })),
  ),
)

/** Einfache Wörter ohne Leer- und Bindestrich, mit Anzahl Buchstaben. */
function spellWords(min: number, max: number): TermCard[] {
  const seen = new Set<string>()
  const out: TermCard[] = []
  for (const c of [
    ...MALEN_LEICHT,
    ...EXPLAIN.bild,
    ...EXPLAIN.wort,
    ...DINGE,
  ]) {
    const w = c.word
    if (!/^[A-Za-zÄÖÜäöü]+$/.test(w) || seen.has(w)) continue
    if (w.length < min || w.length > max) continue
    seen.add(w)
    out.push({ word: w, emoji: c.emoji, hint: `${w.length} Buchstaben` })
  }
  return out
}

const MALEN: readonly TermLevel[] = [
  { label: 'Leicht', note: 'Einfache Dinge', cards: MALEN_LEICHT },
  {
    label: 'Mittel',
    note: 'Alles, was man zeichnen kann',
    cards: EXPLAIN.bild,
  },
  { label: 'Knifflig', note: 'Kleine Szenen', cards: MALEN_KNIFFLIG },
]

const TIERE = bild('Tier')

const DINGE_LEVEL: readonly TermLevel[] = [{ label: 'Dinge', cards: DINGE }]

const RATEN = { secret: true, guess: true } as const

/** Begriff-Stapel je Spiel-ID. */
export const TERM_DECKS: Readonly<Record<string, TermDeck>> = {
  pantomime: {
    ...RATEN,
    task: 'Spiele es vor, ohne zu sprechen!',
    levels: [
      {
        label: 'Leicht',
        note: 'Mit Bild, auch ohne Lesen',
        cards: PANTO_LEICHT,
      },
      {
        label: 'Schwer',
        note: 'Berufe und kleine Szenen',
        cards: PANTO_SCHWER,
      },
    ],
  },
  bilderraten: {
    ...RATEN,
    task: 'Zeichne es, ohne Buchstaben und ohne zu sprechen!',
    levels: MALEN,
  },
  bildstillepost: {
    secret: true,
    guess: false,
    task: 'Zeichne es oben aufs Blatt und falte es um.',
    levels: MALEN.slice(0, 2),
    next: 'Neues Motiv',
  },
  augenzu: {
    secret: false,
    guess: false,
    task: 'Alle schliessen die Augen und zeichnen das!',
    levels: [{ label: 'Motive', cards: MALEN_LEICHT }],
    next: 'Neues Motiv',
  },
  werbinich: {
    secret: true,
    guess: false,
    task: 'Male oder schreibe es auf den Zettel für die Stirn.',
    levels: [
      { label: 'Tiere', cards: TIERE },
      {
        label: 'Figuren & Berufe',
        cards: [...bild('Figur'), ...wort('Beruf')],
      },
    ],
    next: 'Neue Figur',
  },
  tierraten: {
    ...RATEN,
    task: 'Die anderen finden es mit Ja-Nein-Fragen heraus.',
    levels: [{ label: 'Tiere', cards: TIERE }],
  },
  gefuehlspantomime: {
    ...RATEN,
    task: 'Zeige das Gefühl ohne Worte!',
    levels: [{ label: 'Gefühle', cards: GEFUEHLE }],
  },
  gefuehlsgesichter: {
    ...RATEN,
    task: 'Male dieses Gefühl in ein Gesicht.',
    levels: [{ label: 'Gefühle', cards: GEFUEHLE }],
  },
  teekesselchen: {
    ...RATEN,
    task: 'Jede Person beschreibt eine Bedeutung.',
    levels: [{ label: 'Teekesselchen', cards: TEEKESSELCHEN }],
    hint: 'show',
  },
  gegenteil: {
    secret: false,
    guess: false,
    task: 'Was ist das Gegenteil?',
    levels: [{ label: 'Wörter', cards: GEGENTEILE }],
    hint: 'tap',
    hintLabel: '💡 Lösung',
    next: 'Neues Wort',
  },
  oberbegriffe: {
    secret: false,
    guess: false,
    task: 'Wer den Ball fängt, nennt etwas Passendes.',
    levels: [{ label: 'Gruppen', cards: OBERBEGRIFFE }],
    next: 'Neue Gruppe',
  },
  reime: {
    secret: false,
    guess: false,
    task: 'Was reimt sich darauf? Quatschwörter gelten auch!',
    levels: [{ label: 'Reime', cards: REIME }],
    hint: 'tap',
    hintLabel: '💡 Beispiele',
    next: 'Neues Wort',
  },
  reimbilder: {
    secret: false,
    guess: false,
    task: 'Male es links. Was reimt sich darauf?',
    levels: [{ label: 'Reime', cards: REIME }],
    hint: 'tap',
    hintLabel: '💡 Beispiele',
    next: 'Neues Wort',
  },
  geraeusche: {
    ...RATEN,
    task: 'Mach das Geräusch. Die anderen haben die Augen zu.',
    levels: [{ label: 'Geräusche', cards: GERAEUSCHE }],
  },
  summen: {
    ...RATEN,
    task: 'Summe das Lied, ohne Worte!',
    levels: [{ label: 'Lieder', cards: LIEDER }],
  },
  fuehlsocke: {
    ...RATEN,
    task: 'Steck das heimlich in die Socke.',
    levels: DINGE_LEVEL,
  },
  wasistinderkiste: {
    ...RATEN,
    task: 'Leg das heimlich in die Schachtel und beschreibe es.',
    levels: DINGE_LEVEL,
  },
  schattenraetsel: {
    ...RATEN,
    task: 'Halte das heimlich vor die Lampe.',
    levels: DINGE_LEVEL,
  },
  blindmalen: {
    secret: true,
    guess: false,
    task: 'Beschreibe das Bild. Die andere Person malt es.',
    levels: [{ label: 'Bilder', cards: SZENEN }],
    next: 'Neues Bild',
  },
  blumenraten: {
    ...RATEN,
    task: 'Male für jeden Buchstaben einen Strich.',
    levels: [
      { label: 'Kurz', note: '3 bis 5 Buchstaben', cards: spellWords(3, 5) },
      { label: 'Lang', note: '6 bis 10 Buchstaben', cards: spellWords(6, 10) },
    ],
    hint: 'show',
  },
}
