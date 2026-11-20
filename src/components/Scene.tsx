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
  sprache: (
    <>
      {bg('#F7E4D8')}
      {floor(112, '#F2D7C7')}
      <path
        d="M40 30 h52 a8 8 0 0 1 8 8 v18 a8 8 0 0 1 -8 8 h-30 l-10 9 v-9 h-12 a8 8 0 0 1 -8 -8 v-18 a8 8 0 0 1 8 -8z"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <path
        d="M232 46 h40 a7 7 0 0 1 7 7 v14 a7 7 0 0 1 -7 7 h-8 v8 l-9 -8 h-23 a7 7 0 0 1 -7 -7 v-14 a7 7 0 0 1 7 -7z"
        fill="#EFCBB6"
      />
      <g fill="#E6B9A0">
        <circle cx="56" cy="47" r="3" />
        <circle cx="66" cy="47" r="3" />
        <circle cx="76" cy="47" r="3" />
      </g>
    </>
  ),
  knobeln: (
    <>
      {bg('#F1E2F4')}
      {floor(112, '#EAD5EE')}
      <path
        d="M44 40 h18 a7 7 0 1 1 10 0 h18 v18 a7 7 0 1 0 0 10 v18 h-46z"
        fill="#E3C6EA"
      />
      <path
        d="M232 64 h16 a6 6 0 1 1 9 0 h16 v16 a6 6 0 1 0 0 9 v16 h-41z"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <text x="248" y="48" fontSize="26" fontWeight="900" fill="#DDBDE5">
        ?
      </text>
    </>
  ),
  wasser: (
    <>
      {bg('#D2F1F7')}
      <g stroke="#C3EAF2" strokeWidth="2">
        <path d={`M${W.x} 30 H480 M${W.x} 60 H480`} />
        <path d="M0 0 V90 M40 0 V90 M80 0 V90 M240 0 V90 M280 0 V90 M320 0 V90" />
      </g>
      <path
        d="M-170 98 Q-120 90 -80 98 T0 98 T80 98 T160 98 T240 98 T320 98 T400 98 T490 98 V150 H-170Z"
        fill="#B9E5EF"
      />
      <circle cx="60" cy="58" r="9" fill="#FFFFFF" opacity="0.6" />
      <circle cx="76" cy="44" r="5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="252" cy="52" r="7" fill="#FFFFFF" opacity="0.6" />
      <circle cx="264" cy="66" r="4" fill="#FFFFFF" opacity="0.6" />
    </>
  ),
  kochen: (
    <>
      {bg('#FEE5D2')}
      {floor(106, '#F9D6BC')}
      <rect x={W.x} y="102" width={W.w} height="6" fill="#F4C8A8" />
      <rect x="44" y="20" width="56" height="4" rx="2" fill="#F1C6A6" />
      <path
        d="M54 24 v14 M70 24 v18 M86 24 v12"
        stroke="#EDBB97"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="54" cy="42" r="4" fill="#EDBB97" />
      <ellipse cx="70" cy="46" rx="4" ry="5" fill="#EDBB97" />
      <rect
        x="230"
        y="70"
        width="40"
        height="32"
        rx="5"
        fill="#FFFFFF"
        opacity="0.65"
      />
      <rect x="226" y="66" width="48" height="6" rx="3" fill="#F1C6A6" />
    </>
  ),
  haushalt: (
    <>
      {bg('#F6E1E7')}
      {floor(114, '#F0D3DC')}
      <path
        d={`M${W.x} 26 Q160 44 480 26`}
        stroke="#E3BCC8"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M48 32 h22 l4 10 -6 2 v20 h-18 v-20 l-6 -2z"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <rect x="236" y="34" width="14" height="22" rx="3" fill="#EAC5D1" />
      <rect x="254" y="35" width="14" height="22" rx="3" fill="#D8E6F3" />
      <path d="M226 114 l8 -18 h28 l8 18z" fill="#EAC5D1" opacity="0.8" />
    </>
  ),
  karten: (
    <>
      {bg('#FBE2E2')}
      {floor(112, '#F6D3D3')}
      <g transform="rotate(-10 70 66)">
        <rect
          x="50"
          y="40"
          width="40"
          height="56"
          rx="5"
          fill="#FFFFFF"
          opacity="0.75"
        />
        <path
          d="M70 60 c-6 -8 -16 0 0 12 c16 -12 6 -20 0 -12z"
          fill="#F2B8B8"
        />
      </g>
      <rect
        x="230"
        y="70"
        width="28"
        height="28"
        rx="6"
        fill="#FFFFFF"
        opacity="0.75"
      />
      <g fill="#EBB0B0">
        <circle cx="238" cy="78" r="2.5" />
        <circle cx="244" cy="84" r="2.5" />
        <circle cx="250" cy="90" r="2.5" />
      </g>
    </>
  ),
  party: (
    <>
      {bg('#F8E1FA')}
      {floor(114, '#F1D2F4')}
      <path
        d={`M${W.x} 18 Q160 40 480 18`}
        stroke="#E7C1EC"
        strokeWidth="2"
        fill="none"
      />
      <g>
        <path d="M30 22 l8 14 l8 -12z" fill="#F6CFE0" />
        <path d="M62 27 l8 14 l8 -12z" fill="#D9E6F7" />
        <path d="M94 30 l8 14 l8 -12z" fill="#FBE6BF" />
        <path d="M210 30 l8 14 l8 -12z" fill="#D7EDD0" />
        <path d="M242 27 l8 14 l8 -12z" fill="#F6CFE0" />
        <path d="M274 22 l8 14 l8 -12z" fill="#E6D9FB" />
      </g>
      <ellipse cx="60" cy="80" rx="10" ry="12" fill="#EFC4F2" />
      <path
        d="M60 92 q-3 10 2 18"
        stroke="#E7C1EC"
        strokeWidth="1.5"
        fill="none"
      />
      <ellipse cx="262" cy="74" rx="9" ry="11" fill="#D9E6F7" />
      <path
        d="M262 85 q3 10 -2 18"
        stroke="#E7C1EC"
        strokeWidth="1.5"
        fill="none"
      />
    </>
  ),
  gefuehle: (
    <>
      {bg('#FDF3C7')}
      {floor(114, '#F8E9AE')}
      <path
        d="M66 44 c-10 -14 -28 0 0 22 c28 -22 10 -36 0 -22z"
        fill="#FAE0A0"
      />
      <circle cx="252" cy="56" r="16" fill="#FFFFFF" opacity="0.7" />
      <circle cx="246" cy="52" r="2" fill="#E8C979" />
      <circle cx="258" cy="52" r="2" fill="#E8C979" />
      <path
        d="M245 60 q7 6 14 0"
        stroke="#E8C979"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  geschwister: (
    <>
      {bg('#DDF1E4')}
      <path d="M-170 114 Q20 102 160 112 T490 108 V150 H-170Z" fill="#CDE9D6" />
      {/* zwei Ballone an verknoteten Schnüren */}
      <path
        d="M58 52 Q62 80 72 104 M84 46 Q80 78 72 104"
        stroke="#B3D8BF"
        strokeWidth="2"
        fill="none"
      />
      <ellipse cx="56" cy="40" rx="12" ry="14" fill="#F4CADB" />
      <ellipse cx="86" cy="34" rx="10" ry="12" fill="#FAE0A0" />
      <g fill="#FFFFFF" opacity="0.7">
        <circle cx="236" cy="70" r="11" />
        <circle cx="262" cy="78" r="8" />
      </g>
      <path d="M226 112 q10 -30 20 0 M254 112 q8 -24 16 0" fill="#B3D8BF" />
    </>
  ),
  unterwegs: (
    <>
      {bg('#DCEBF2')}
      <path d={`M${W.x} 100 H480 V140 H${W.x}Z`} fill="#C9DDE7" />
      <path
        d={`M${W.x} 120 H480`}
        stroke="#EEF5F9"
        strokeWidth="3"
        strokeDasharray="16 14"
      />
      <rect x="54" y="52" width="4" height="48" fill="#BCD3DF" />
      <circle cx="56" cy="46" r="11" fill="#FFFFFF" opacity="0.75" />
      <rect x="244" y="64" width="4" height="36" fill="#BCD3DF" />
      <path d="M232 52 h28 l-6 12 h-22z" fill="#FFFFFF" opacity="0.75" />
      <path
        d="M180 26 q8 -8 16 0 q8 -6 14 2 q-14 4 -30 -2Z"
        fill="#FFFFFF"
        opacity="0.8"
      />
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
  bauen: (
    <>
      {bg('#DBE8F7')}
      {floor(112, '#CCDDF2')}
      {/* Klotzturm links, Brücke rechts, Schiene am Boden */}
      <rect x="44" y="92" width="22" height="20" rx="3" fill="#F2C7BF" />
      <rect x="68" y="92" width="22" height="20" rx="3" fill="#B9CCEC" />
      <rect x="56" y="72" width="22" height="20" rx="3" fill="#F3D9BC" />
      <path d="M58 72 L67 56 L76 72Z" fill="#C8E3CC" />
      <rect x="228" y="88" width="14" height="24" rx="3" fill="#B9CCEC" />
      <rect x="272" y="88" width="14" height="24" rx="3" fill="#B9CCEC" />
      <path
        d="M222 88 h70 v-8 a8 8 0 0 0 -8 -8 h-54 a8 8 0 0 0 -8 8z"
        fill="#F3D9BC"
      />
      <g stroke="#B6C9E6" strokeWidth="3">
        <path d={`M${W.x} 126 H480`} />
        <path d="M20 122 v8 M44 122 v8 M268 122 v8 M292 122 v8" />
      </g>
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
