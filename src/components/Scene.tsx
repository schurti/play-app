import type { ReactNode } from 'react'
import type { CategoryId } from '../games/categories'

/**
 * Gezeichnete Hintergrund-Szene pro Kategorie. Die Mitte bleibt frei,
 * damit das Spielbild darauf «stehen» kann.
 */
const SCENES: Record<CategoryId, ReactNode> = {
  lernen: (
    <>
      <rect width="320" height="140" fill="#E2E8FF" />
      <rect x="0" y="112" width="320" height="28" fill="#C9D3FB" />
      <rect x="44" y="40" width="58" height="6" rx="3" fill="#AEBBF0" />
      <rect x="48" y="20" width="10" height="20" rx="2" fill="#4C6EF5" />
      <rect x="60" y="24" width="9" height="16" rx="2" fill="#FFB547" />
      <rect x="71" y="18" width="11" height="22" rx="2" fill="#E5583A" />
      <rect x="84" y="26" width="9" height="14" rx="2" fill="#2F9E5B" />
      <rect x="222" y="92" width="22" height="22" rx="5" fill="#FFB547" />
      <rect x="248" y="92" width="22" height="22" rx="5" fill="#4C6EF5" />
      <rect x="235" y="70" width="22" height="22" rx="5" fill="#E5583A" />
      <text x="228" y="108" fontSize="14" fontWeight="900" fill="#fff">
        A
      </text>
      <text x="254" y="108" fontSize="14" fontWeight="900" fill="#fff">
        B
      </text>
      <text x="241" y="86" fontSize="14" fontWeight="900" fill="#fff">
        C
      </text>
    </>
  ),
  malen: (
    <>
      <rect width="320" height="140" fill="#FCE0EC" />
      <rect x="0" y="114" width="320" height="26" fill="#F8C8DA" />
      <circle cx="62" cy="36" r="15" fill="#F7A8C6" />
      <circle cx="80" cy="52" r="7" fill="#FFD25E" />
      <circle cx="258" cy="30" r="13" fill="#9AD0F5" />
      <circle cx="242" cy="46" r="6" fill="#B7E08C" />
      <path
        d="M212 104 q20 -18 46 -6"
        stroke="#D9488F"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 100 q22 10 42 -6"
        stroke="#FFB547"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  papier: (
    <>
      <rect width="320" height="140" fill="#D3F1EC" />
      <rect x="0" y="108" width="320" height="32" fill="#B7E3DA" />
      <rect x="0" y="106" width="320" height="5" fill="#9CD6CA" />
      <g transform="rotate(-8 74 64)">
        <rect x="46" y="34" width="56" height="70" rx="4" fill="#fff" />
        <path
          d="M54 50 H94 M54 60 H94 M54 70 H86 M54 80 H92"
          stroke="#BFD9F2"
          strokeWidth="3"
        />
      </g>
      <g transform="rotate(30 248 60)">
        <rect x="240" y="24" width="12" height="64" rx="3" fill="#FFB547" />
        <path d="M240 88 L246 102 L252 88Z" fill="#F5D7A8" />
        <path d="M244 96 L246 102 L248 96Z" fill="#2A2453" />
        <rect x="240" y="18" width="12" height="8" rx="3" fill="#F7A8C6" />
      </g>
      <circle cx="236" cy="118" r="9" fill="#fff" opacity="0.85" />
    </>
  ),
  bewegung: (
    <>
      <rect width="320" height="140" fill="#E4F6FF" />
      <circle cx="250" cy="34" r="18" fill="#FFD25E" />
      <path d="M-10 104 Q70 64 160 96 T330 88 V150 H-10Z" fill="#B7E08C" />
      <path d="M-10 122 Q100 90 200 116 T330 112 V150 H-10Z" fill="#8FCB64" />
      <circle cx="62" cy="80" r="15" fill="#6DB24A" />
      <rect x="59.5" y="90" width="5" height="14" rx="2.5" fill="#9C6B3F" />
      <circle cx="266" cy="90" r="11" fill="#6DB24A" />
      <rect x="264" y="98" width="4" height="10" rx="2" fill="#9C6B3F" />
    </>
  ),
  basteln: (
    <>
      <rect width="320" height="140" fill="#FDEBB5" />
      <rect x="0" y="110" width="320" height="30" fill="#F2CF7A" />
      <rect x="0" y="108" width="320" height="6" fill="#E8BE5E" />
      <path d="M52 30 l18 6 -12 14z" fill="#E5583A" />
      <path d="M244 22 l16 12 -18 6z" fill="#4C6EF5" />
      <path d="M78 66 l14 -8 2 16z" fill="#2F9E5B" />
      <path d="M226 66 l18 2 -8 14z" fill="#D9488F" />
      <rect
        x="46"
        y="118"
        width="40"
        height="8"
        rx="2"
        fill="#fff"
        opacity="0.8"
      />
      <rect x="230" y="120" width="44" height="8" rx="2" fill="#FFB547" />
    </>
  ),
  musik: (
    <>
      <rect width="320" height="140" fill="#EDE4FF" />
      <path d="M-10 118 Q80 104 160 116 T330 112 V150 H-10Z" fill="#DCCBFF" />
      <g fill="#B79BF5">
        <circle cx="62" cy="58" r="8" />
        <rect x="68" y="24" width="4" height="34" />
        <path d="M68 24 q14 4 18 14 q-8 -4 -18 -4z" />
        <circle cx="236" cy="46" r="7" />
        <circle cx="258" cy="40" r="7" />
        <rect x="241" y="16" width="3.5" height="30" />
        <rect x="263" y="10" width="3.5" height="30" />
        <rect x="241" y="10" width="25.5" height="6" />
      </g>
      <circle cx="96" cy="30" r="4" fill="#fff" opacity="0.7" />
      <circle cx="222" cy="80" r="3" fill="#fff" opacity="0.7" />
    </>
  ),
  forschen: (
    <>
      <rect width="320" height="140" fill="#D6EEF9" />
      <g stroke="#C2E3F3" strokeWidth="2">
        <path d="M0 30 H320 M0 60 H320 M0 90 H320" />
        <path d="M40 0 V108 M80 0 V108 M120 0 V108 M160 0 V108 M200 0 V108 M240 0 V108 M280 0 V108" />
      </g>
      <rect x="0" y="108" width="320" height="32" fill="#A9D8EE" />
      <rect x="0" y="106" width="320" height="6" fill="#8CC8E5" />
      <circle cx="62" cy="40" r="12" fill="#fff" opacity="0.75" />
      <circle cx="80" cy="62" r="6" fill="#fff" opacity="0.75" />
      <circle cx="254" cy="34" r="9" fill="#fff" opacity="0.75" />
      <circle cx="240" cy="58" r="5" fill="#fff" opacity="0.75" />
    </>
  ),
  ruhe: (
    <>
      <defs>
        <linearGradient id="scene-nacht" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4B5A93" />
          <stop offset="1" stopColor="#8C97C6" />
        </linearGradient>
      </defs>
      <rect width="320" height="140" fill="url(#scene-nacht)" />
      <circle cx="214" cy="34" r="16" fill="#FFF3C4" />
      <circle cx="223" cy="28" r="14" fill="#55649B" />
      <g fill="#FFF3C4">
        <circle cx="56" cy="24" r="2" />
        <circle cx="90" cy="46" r="1.5" />
        <circle cx="128" cy="18" r="2" />
        <circle cx="206" cy="26" r="1.5" />
        <circle cx="226" cy="64" r="2" />
        <circle cx="48" cy="70" r="1.5" />
      </g>
      <path d="M-10 116 Q90 98 170 112 T330 106 V150 H-10Z" fill="#6C78AC" />
    </>
  ),
  rollen: (
    <>
      <rect width="320" height="140" fill="#FDDDD0" />
      <ellipse cx="160" cy="118" rx="100" ry="18" fill="#FBEBDF" />
      <rect
        x="0"
        y="112"
        width="320"
        height="28"
        fill="#EBA685"
        opacity="0.6"
      />
      <path d="M0 0 H82 Q76 60 88 140 H0Z" fill="#E5583A" />
      <path d="M320 0 H238 Q244 60 232 140 H320Z" fill="#E5583A" />
      <path
        d="M48 0 Q44 70 52 140 M66 0 Q62 70 70 140"
        stroke="#C4432A"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M272 0 Q276 70 268 140 M254 0 Q258 70 250 140"
        stroke="#C4432A"
        strokeWidth="3"
        fill="none"
      />
      <path d="M0 0 H320 V12 Q160 26 0 12Z" fill="#C4432A" />
    </>
  ),
}

export default function Scene({
  category,
  className,
}: {
  category: CategoryId
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 140"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {SCENES[category]}
    </svg>
  )
}
