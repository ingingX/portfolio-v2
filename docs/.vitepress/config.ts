import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Home',
  description: 'AI Research Portfolio',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Research', link: '/research' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ingingX' }
    ]
  }
})