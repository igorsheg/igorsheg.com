import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: UserConfig = {
  plugins: [
    react(),
    ssr({ prerender: true }),
    vanillaExtractPlugin()
  ],
  ssr: {
  }
}

export default config
