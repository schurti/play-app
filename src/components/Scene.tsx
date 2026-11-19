import type { ReactNode } from 'react'
import type { CategoryId } from '../games/categories'

/*
 * Gezeichnete Hintergrund-Szenen pro Kategorie – bewusst ruhig und pastellig,
 * damit das 3D-Bild im Vordergrund steht.
 *
 * Die Zeichenfläche ist breit (x −160 … 480), der Bildinhalt sitzt in der Mitte
 * (x 0 … 320). So füllt die Szene auch breite Flächen (Dialog auf dem Tablet),
 * ohne oben abgeschnitten zu werden. Die Mitte (x ≈ 110 … 210) bleibt frei
 * für das Spielbild.
 */
const W = { x: -160, w: 640 }
const bg = (fill: string) => (
  <rect x={W.x} y="0" width={W.w} height="140" fill={fill} />
)
const floor = (y: number, fill: string) => (
  <rect x={W.x} y={y} width={W.w} height={140 - y} fill={fill} />
)

const SCENES: Record<CategoryId, ReactNode> = {
  lernen: (
    <>
      {bg('#E2E8FF')}
      {floor(112, '#D5DCFB')}
      <rect x="40" y="44" width="56" height="5" rx="2.5" fill="#C9D2F7" />
      <rect x="46" y="26" width="9" height="18" rx="2" fill="#B9C6F5" />
      <rect x="57" y="30" width="8" height="14" rx="2" fill="#F3D9BC" />
      <rect x="67" y="24" width="10" height="20" rx="2" fill="#F2C7BF" />
      <rect x="79" y="31" width="8" height="13" rx="2" fill="#C8E3CC" />
      <rect x="226" y="94" width="18" height="18" rx="4" fill="#F3D9BC" />
      <rect x="248" y="94" width="18" height="18" rx="4" fill="#C9D2F7" />
      <rect x="237" y="76" width="18" height="18" rx="4" fill="#F2C7BF" />
    </>
  ),
  malen: (
    <>
      {bg('#FCE0EC')}
      {floor(114, '#F8D3E2')}
      <circle cx="62" cy="38" r="13" fill="#F7CADC" />
      <circle cx="80" cy="52" r="6" fill="#FBE6BF" />
      <circle cx="256" cy="34" r="11" fill="#D5E8F6" />
      <circle cx="242" cy="50" r="5" fill="#D9EDCB" />
      <path
        d="M214 102 q20 -14 42 -5"
        stroke="#F2BDD2"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M52 100 q20 8 38 -5"
        stroke="#F8DDB0"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  papier: (
    <>
      {bg('#D3F1EC')}
      {floor(108, '#C4EAE3')}
      <g transform="rotate(-8 72 66)">
        <rect
          x="48"
          y="40"
          width="48"
          height="60"
          rx="4"
          fill="#FFFFFF"
          opacity="0.75"
        />
        <path
          d="M56 54 H88 M56 63 H88 M56 72 H82"
          stroke="#CFE4F2"
          strokeWidth="3"
        />
      </g>
      <g transform="rotate(30 250 62)" opacity="0.8">
        <rect x="244" y="30" width="10" height="56" rx="3" fill="#F6DCAA" />
        <path d="M244 86 L249 98 L254 86Z" fill="#F4E4C8" />
        <rect x="244" y="25" width="10" height="7" rx="3" fill="#F5C8D8" />
      </g>
    </>
  ),
  bewegung: (
    <>
      {/* Turnhalle: Sprossenwand, Hallenboden mit Linie, Ball und Hütchen */}
      {bg('#DCF2D9')}
      {floor(108, '#CDE9C9')}
      <rect x={W.x} y="116" width={W.w} height="2.5" fill="#E9F7E6" />
      <g stroke="#BFE0BA" strokeWidth="4" strokeLinecap="round">
        <path d="M44 24 V108 M92 24 V108" />
        <path d="M44 38 H92 M44 54 H92 M44 70 H92 M44 86 H92 M44 102 H92" />
      </g>
      <circle cx="252" cy="98" r="11" fill="#F6D2B4" />
      <path
        d="M241 98 Q252 92 263 98"
        stroke="#F0BE98"
        strokeWidth="2"
        fill="none"
      />
      <path d="M222 108 L229 90 L236 108Z" fill="#F7D8A5" />
      <rect x="219" y="106" width="20" height="3" rx="1.5" fill="#EFC98C" />
    </>
  ),
  draussen: (
    <>
      <defs>
        <linearGradient id="scene-wald" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E6F3F8" />
          <stop offset="1" stopColor="#EEF5DD" />
        </linearGradient>
      </defs>
      <rect x={W.x} y="0" width={W.w} height="140" fill="url(#scene-wald)" />
      <circle cx="92" cy="30" r="12" fill="#FBEBB0" />
      <path
        d="M-170 112 Q-40 96 80 106 Q200 96 320 104 T490 102 V150 H-170Z"
        fill="#D7E8B9"
      />
      <g fill="#B5CF8E">
        <path d="M50 108 L64 72 L78 108Z" />
        <path d="M54 88 L64 60 L74 88Z" />
        <path d="M236 108 L252 68 L268 108Z" />
        <path d="M241 86 L252 56 L263 86Z" />
      </g>
      <path
        d="M200 30 q7 -7 14 0 q7 -5 12 2 q-12 4 -26 -2Z"
        fill="#FFFFFF"
        opacity="0.8"
      />
    </>
  ),
  basteln: (
    <>
      {bg('#FDEBB5')}
      {floor(110, '#F7E0A2')}
      <path d="M54 34 l15 5 -10 12z" fill="#F4C7B8" />
      <path d="M246 28 l14 10 -15 5z" fill="#CCD6F6" />
      <path d="M78 66 l12 -7 2 14z" fill="#CFE6C5" />
      <path d="M228 66 l15 2 -7 12z" fill="#F4CADB" />
      <rect
        x="48"
        y="117"
        width="36"
        height="7"
        rx="2"
        fill="#FFFFFF"
        opacity="0.6"
      />
      <rect x="232" y="118" width="38" height="7" rx="2" fill="#F6D29A" />
    </>
  ),
  musik: (
    <>
      {bg('#EDE4FF')}
      <path d="M-170 118 Q0 108 160 116 T490 112 V150 H-170Z" fill="#E3D8FB" />
      <g fill="#D6C8F7">
        <circle cx="62" cy="60" r="7" />
        <rect x="67" y="30" width="3.5" height="30" />
        <path d="M67 30 q12 4 15 12 q-7 -4 -15 -3z" />
        <circle cx="240" cy="48" r="6" />
        <circle cx="259" cy="43" r="6" />
        <rect x="244.5" y="20" width="3" height="28" />
        <rect x="263.5" y="15" width="3" height="28" />
        <rect x="244.5" y="15" width="22" height="5" />
      </g>
    </>
  ),
  forschen: (
    <>
      {bg('#D6EEF9')}
      <g stroke="#CBE8F6" strokeWidth="2">
        <path d={`M${W.x} 34 H480 M${W.x} 68 H480`} />
        <path d="M0 0 V106 M40 0 V106 M80 0 V106 M240 0 V106 M280 0 V106 M320 0 V106" />
      </g>
      {floor(106, '#C3E3F2')}
      <circle cx="64" cy="42" r="10" fill="#FFFFFF" opacity="0.6" />
      <circle cx="80" cy="62" r="5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="252" cy="36" r="8" fill="#FFFFFF" opacity="0.6" />
      <circle cx="240" cy="58" r="4" fill="#FFFFFF" opacity="0.6" />
    </>
  ),
  ruhe: (
    <>
      <defs>
        <linearGradient id="scene-nacht" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#A7B0D3" />
          <stop offset="1" stopColor="#CDD2E8" />
        </linearGradient>
      </defs>
      <rect x={W.x} y="0" width={W.w} height="140" fill="url(#scene-nacht)" />
      <circle cx="214" cy="34" r="13" fill="#FFF6D8" />
      <circle cx="221" cy="29" r="11" fill="#AEB7D8" />
      <g fill="#FFF6D8" opacity="0.8">
        <circle cx="56" cy="26" r="1.8" />
        <circle cx="88" cy="46" r="1.4" />
        <circle cx="128" cy="20" r="1.6" />
        <circle cx="252" cy="54" r="1.6" />
        <circle cx="46" cy="70" r="1.4" />
      </g>
      <path d="M-170 116 Q60 100 170 112 T490 108 V150 H-170Z" fill="#BCC3E0" />
    </>
  ),
  rollen: (
    <>
      {bg('#FDDDD0')}
      {floor(112, '#F9D0C1')}
      <ellipse cx="160" cy="118" rx="96" ry="14" fill="#FDE8DE" />
      <path d={`M${W.x} 0 H80 Q74 60 86 140 H${W.x}Z`} fill="#F6C1AE" />
      <path d="M480 0 H240 Q246 60 234 140 H480Z" fill="#F6C1AE" />
      <path
        d="M50 0 Q46 70 54 140 M66 0 Q62 70 70 140"
        stroke="#EFAF98"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M270 0 Q274 70 266 140 M254 0 Q258 70 250 140"
        stroke="#EFAF98"
        strokeWidth="2.5"
        fill="none"
      />
      <path d={`M${W.x} 0 H480 V10 Q160 22 ${W.x} 10Z`} fill="#EFAF98" />
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
      viewBox={`${W.x} 0 ${W.w} 140`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {SCENES[category]}
    </svg>
  )
}
