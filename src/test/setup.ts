import '@testing-library/jest-dom/vitest'
import 'vitest-canvas-mock'

// jsdom implementiert scrollTo nicht.
window.scrollTo = vi.fn()
