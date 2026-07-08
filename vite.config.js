import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: './',
  plugins: [
    injectHTML(),
    // Плагин заставит Vite собирать и логировать файлы из public/img
    viteStaticCopy({
      targets: [
        {
          src: 'public/img/**/*',
          dest: 'img'
        },
        {
          src: 'public/favicon.svg',
          dest: '.'
        },
        {
          src: 'public/icons.svg',
          dest: '.'
        }
      ],
      // Включаем отображение скопированных файлов в консоли
      structured: true
    })
  ],
  build: {
    // Отключаем стандартное тихое копирование папки public, 
    // чтобы файлы не копировались дважды
    copyPublicDir: false, 
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (extType === 'css') {
            return 'css/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  }
})