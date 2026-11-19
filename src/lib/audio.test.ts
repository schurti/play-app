import { audioContext, fanfare, noise, speak, stopSpeech, tone } from './audio'

describe('audio ohne Browser-Support', () => {
  it('sind No-ops und werfen nicht', () => {
    expect(audioContext()).toBeNull()
    expect(() => {
      tone(440, 0.1)
      noise(0.1)
      speak('Hallo')
      stopSpeech()
      fanfare()
    }).not.toThrow()
  })
})
