import { defineConfig } from 'vitepress'
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vui/',
  vite: {
    resolve: {
      alias: {
        '@': (() => {
          console.log(path.resolve(path.dirname('./'), 'src'))
          return path.resolve(path.dirname('./'), 'src');
        })()
      }
    },
  },
  title: "@42sol/vui",
  description: "An awesome Vue 3 UI library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 42Solution, LLC'
    },

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Getting started', link: '/gettingStarted' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/Button' },
          { text: 'Cascader', link: '/components/Cascader' },
          { text: 'Collapse', link: '/components/Collapse' },
          { text: 'Input', link: '/components/Input' }
        ]
      },
      {
        text: 'Function',
        items: [
          { text: 'createStyleClasses', link: '/functions/createStyleClasses' },
        ]
      },
      { text: 'API', link: '/api' },
      { text: 'FAQ', link: '/faq' },
      { text: 'For development', link: '/forDevelopment' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/42-sol/vui' }
    ]
  }
})
