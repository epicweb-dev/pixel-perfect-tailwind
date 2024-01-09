import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			keyframes: {
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'slide-top': 'slide-top 0.3s ease-out',
			},
		},
	},
	plugins: [],
} satisfies Config
