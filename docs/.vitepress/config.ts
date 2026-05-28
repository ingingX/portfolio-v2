import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Yingpeng Ma',
  description: 'AI Research Portfolio',

  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects/' },
      { text: 'CV', link: '/resume/' },
      // { text: 'Blog', link: '/blog/' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ingingX'
      }
    ],

    footer: { message: 'Built with <a href="https://vitepress.dev">VitePress</a>,   © 2026 Yingpeng Ma' }
  }
})