import {
  defineConfig,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: {
    ...minimal2023Preset,
    maskable: {
      ...minimal2023Preset.maskable,
      resizeOptions: { background: '#FFF6E6' },
    },
    apple: {
      ...minimal2023Preset.apple,
      padding: 0.1,
      resizeOptions: { background: '#FFF6E6' },
    },
  },
  images: ['assets/icon.svg'],
})
