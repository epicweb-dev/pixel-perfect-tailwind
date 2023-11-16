import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				comfortaa: ['Comfortaa', 'sans-serif'],
			},
		},
	},
	plugins: [],
} satisfies Config
