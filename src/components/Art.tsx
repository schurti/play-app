import { EMOJI_IMAGES } from '../lib/emojiImages'

const BASE = `${import.meta.env.BASE_URL}img/emoji/`

/**
 * Zeigt ein illustriertes Bild (Fluent Emoji 3D) für ein Emoji.
 * Fehlt ein Bild, fällt es auf das normale Emoji zurück.
 */
export default function Art({
  emoji,
  size,
  className,
}: {
  emoji: string
  size: number
  className?: string
}) {
  const slug = EMOJI_IMAGES[emoji.replace(/️/g, '')]
  if (!slug) {
    return (
      <span
        className={className}
        style={{ fontSize: size * 0.8, lineHeight: 1 }}
        aria-hidden="true"
      >
        {emoji}
      </span>
    )
  }
  return (
    <img
      className={className}
      src={`${BASE}${slug}.webp`}
      width={size}
      height={size}
      alt=""
      draggable={false}
      decoding="async"
      loading="lazy"
    />
  )
}
