import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'

const isVercel = process.env.VERCEL === '1'
const forSites = process.env?.FOR_SITES === 'true'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    // Use vercel preset when deploying to Vercel, node preset for other deployments
    (isVercel || forSites) &&
      nitroV2Plugin({
        compatibilityDate: '2025-10-08',
        preset: isVercel ? 'vercel' : 'node',
      }),
    devtoolsJson(),
    viteReact(),
  ],
  server: {
    host: '::',
    allowedHosts: true,
    hmr: true,
  },
})

export default config
