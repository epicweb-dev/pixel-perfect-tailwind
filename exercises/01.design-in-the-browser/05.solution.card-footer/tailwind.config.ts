import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
} satisfies Config
