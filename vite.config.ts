import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/$/, '')
  const ogImage = siteUrl ? `${siteUrl}/og-image.png` : '/og-image.png'

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-og-meta',
        transformIndexHtml(html) {
          return html
            .replaceAll('__OG_IMAGE_URL__', ogImage)
            .replaceAll('__SITE_URL__', siteUrl || '')
        },
      },
    ],
  }
})
