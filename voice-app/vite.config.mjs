// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import Fonts from 'unplugin-fonts/vite'
import VueRouter from 'unplugin-vue-router/vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'

// Utilidades
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// Configuración de Vite (ver https://vitejs.dev/config/)
export default defineConfig(({ mode }) => {
  const isElectron = mode === 'electron'

  const plugins = [
    VueRouter(),
    Vue({
      template: { transformAssetUrls },
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Roboto',
            weights: [100, 300, 400, 500, 700, 900],
            styles: ['normal', 'italic'],
          },
        ],
      },
    }),
  ]

  if (isElectron) {
    plugins.push(
      electron([
        {
          // Main-Process entry file of the Electron App.
          entry: 'electron/main.js',
        },
      ]),
      renderer({
        // Enables use of Node.js API in the Renderer-process
        nodeIntegration: true,
      }),
    )
  }

  return {
    plugins,
    define: { 'process.env': {} },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url)),
      },
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx',
        '.vue',
      ],
    },
    server: {
      port: 3000,
    },
  }
})
