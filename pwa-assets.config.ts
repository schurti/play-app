import {
  defineConfig,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset: {
    ...minimal2023Preset,
    maskable: {
      ...minimal2023Preset.maskable,
      resizeOptions: { background: '#FFF8EC' },
    },
    apple: {
      ...minimal2023Preset.apple,
      resizeOptions: { background: '#FFF8EC' },
    },
  },
  images: ['public/icon.svg'],
})
