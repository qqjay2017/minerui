import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import Markdown from 'vite-plugin-md';
import path from 'path';
import config from './package.json';
const hljs = require('highlight.js'); // https://highlightjs.org/
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc';
import markdownItContainer from 'markdown-it-container';
const resolve = path.resolve;

const containers = ['success', 'warning', 'info', 'error'].map((type) => {
  return [
    markdownItContainer,
    type,
    {
      validate: function (params: string) {
        const str = params.trim();
        if (str === type || str.startsWith(`${type} `)) {
          return [str, str === type ? '' : str.substr(type.length + 1)];
        }
        return null;
      },
      render: function (tokens: any[], idx: number) {
        const str = tokens[idx].info.trim();
        const m = [str, str === type ? '' : str.substr(type.length + 1)];
        if (tokens[idx].nesting === 1) {
          // opening tag
          return `<p><e-alert type="${type}" :closable="false" title="${m[1]}" >`;
        } else {
          // closing tag
          return '</e-alert></p>';
        }
      }
    }
  ];
});

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 2021,
    proxy: {
      '/devServer': {
        target: 'https://nutui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        })
      ]
    }
  },
  plugins: [
    // Markdown({
    //   // default options passed to markdown-it
    //   // see: https://markdown-it.github.io/markdown-it/
    //   markdownItOptions: {
    //     highlight: function (str, lang) {
    //       if (lang && hljs.getLanguage(lang)) {
    //         try {
    //           return hljs.highlight(lang, str).value;
    //         } catch (__) {}
    //       }
    //
    //       return ''; // 使用额外的默认转义
    //     }
    //   }
    // }),
    createPlugin({
      markdownIt: {
        plugins: [...containers]
      },
      highlight: {
        theme: 'one-light'
      }
    }),
    vue({
      include: [/\.vue$/, /\.md$/, ...vueDocFiles]
    })

    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/',
    assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, 'index.html')
        // mobile: resolve(__dirname, 'demo.html')
      }
    }
  }
});
