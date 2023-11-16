import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		/* 
			🐨 Extend the `fontFamily` theme object to generate the 
			`font-comfortaa` utility class used in `App.tsx`
		*/
	},
	plugins: [],
} satisfies Config
