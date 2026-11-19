import { rewardMessage } from './reward'

describe('rewardMessage', () => {
  it('Kategorie-Sticker', () => {
    expect(rewardMessage('lernen', 78)).toBe('🏆 Neuer Sticker: 🧠 Lernen!')
  })
  it('Kategorien mit b am Anfang sind keine Abzeichen', () => {
    expect(rewardMessage('bewegung', 78)).toBe('🏆 Neuer Sticker: 🏃 Bewegung!')
    expect(rewardMessage('basteln*', 78)).toBe(
      '✨ Goldener Sticker: ✂️ Basteln!',
    )
  })
  it('goldener Sticker', () => {
    expect(rewardMessage('lernen*', 78)).toBe('✨ Goldener Sticker: 🧠 Lernen!')
  })
  it('Abzeichen', () => {
    expect(rewardMessage('b5', 78)).toBe('🎖️ Neues Abzeichen: 🥉 Entdecker!')
  })
})
