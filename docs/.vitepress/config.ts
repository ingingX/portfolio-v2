import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Yingpeng Ma',
  description: 'AI Research Portfolio',

  themeConfig: {
    nav: [
      // { text: 'About', link: '/about' },
      {
        text: 'Projects',
        items: [
          { text: 'Analyzing Human vs. Neural Attention in VQA', link: '/projects/vqaattention' },
          { text: 'GazeEval-VLM', link: '/projects/gazeeval-vlm' },
          { text: 'ValveSense-v2', link: '/projects/valvesense' },
          { text: 'LatentFit', link: '/projects/latentfit' },
          { text: 'Image Salience Analysis', link: '/projects/imagesalience' },
          { text: 'EEG Method Visualization', link: '/projects/eegvis' },
        ]
      },
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