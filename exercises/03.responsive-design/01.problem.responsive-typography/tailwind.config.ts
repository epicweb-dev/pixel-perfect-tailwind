import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			screens: {
				sm: '520px',
				lg: '976px',
			},
			colors: {
				highlight: '#6202FF',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			/*
				🐨 Extend the 'fontSize' object to include the following:
				
				- a '4.5xl' key with: 
					- a font size of '2.625rem' 
					- a line height of '1.15'
				
				- a '5.5xl' key with:
					- a font size of '3.375rem'
					- a line height of '1'
			*/
			/* 
				💰 You can use an array to pass both the 
				font size and line hight like so:
				fontSize: {
					key: [
						'2.625rem' // font size, 
						'1.15' //line height
					],
				}
			*/
		},
	},
	plugins: [],
} satisfies Config
