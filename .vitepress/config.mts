import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "hp-trackpoint",
  description: "docs for hp-trackpoint",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/introduction' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是hp-trackpoint', link: '/introduction' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  srcDir: './src'
})
