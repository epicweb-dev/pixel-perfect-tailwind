import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 🐨 Import the `@tailwindcss/vite` plugin

// https://vitejs.dev/config/
export default defineConfig({
	// 🐨 Register the Taliwind plugin in the `plugins` array
	plugins: [react()],
	server: {
		port: Number(process.env.PORT) || 3000,
	},
})
