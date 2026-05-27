import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Yingpeng Ma',
  description: 'AI Research Portfolio',

  themeConfig: {
    nav: [
      { text: 'About', link: '/about' },
      { text: 'Resume', link: '/resume' },
      { text: 'Projects', link: '/projects/valvesense' },
      { text: 'Blog', link: '/blog' },
      { text: 'Contact', link: '/contact' }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ingingX'
      }
    ],

    footer: {
      message: 'Built with VitePress',
      copyright: '© 2026 Yingpeng Ma'
    }
  }
})