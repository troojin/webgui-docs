import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'WebGUI',
  description:
    'A small C++ library for native Windows applications with HTML, CSS, and JavaScript user interfaces.',
  lang: 'en-US',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/window' },
      { text: 'Examples', link: '/examples/basic' },
      { text: 'Download', link: 'http://end.lat/cdn/webgui-libary/releases/1.0.3.rar' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Loading Pages', link: '/guide/loading-pages' },
            { text: 'C++ and JavaScript Messages', link: '/guide/messaging' },
            { text: 'Running Scripts', link: '/guide/scripting' },
            { text: 'Embedding in Win32', link: '/guide/embedding' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Requirements', link: '/guide/requirements' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Window', link: '/api/window' },
            { text: 'Context', link: '/api/context' },
            { text: 'CMake', link: '/api/cmake' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Basic Window', link: '/examples/basic' },
            { text: 'Embedded Debug Menu', link: '/examples/embedded' },
            { text: 'JSON Messaging', link: '/examples/json-messaging' }
          ]
        }
      ]
    },

    footer: {
      message: 'Released under the project license.',
      copyright: 'WebGUI'
    }
  }
})
