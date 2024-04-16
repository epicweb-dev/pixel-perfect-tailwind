// @ts-expect-error
import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config
