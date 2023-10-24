import { defineConfig, presetUno, presetAttributify } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import { presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({
      prefix: '_',
      prefixedOnly: true
    }),
    presetIcons()
  ],
  transformers: [
    transformerDirectives()
  ]
})
