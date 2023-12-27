import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'roll-reveal': 'roll-reveal 0.4s cubic-bezier(.22,1.28,.54,.99)',
				'slide-top': 'slide-top 0.3s ease-out',
			},
		},
	},
	plugins: [],
} satisfies Config
