import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			/* 
				🐨 1. Extend the 'screens' object and replace 
				the 'sm' and 'lg' breakpoints with the 
				values from the Figma design.
			*/
			/* 
				🐨 2. Extend the 'colors' object and add a 'highlight' color.
				Get the HEX color value from Figma.
			*/
			/* 
				🐨 3. Extend the 'fontFamily' object and add a 'poppins' family.
				Set its value to `['Poppins', 'sans-serif']`.
			*/
		},
	},
	plugins: [],
} satisfies Config
