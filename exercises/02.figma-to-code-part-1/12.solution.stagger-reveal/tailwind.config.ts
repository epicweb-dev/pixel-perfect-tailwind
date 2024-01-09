import { type Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				charcoal: '#475569',
				highlight: '#6202FF',
			},
			fontSize: {
				'4.5xl': ['2.625rem', '1.15'],
				'5.5xl': ['3.375rem', '1'],
			},
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'slide-left': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				},
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'roll-reveal': 'roll-reveal 0.4s cubic-bezier(.22,1.28,.54,.99)',
				'slide-left': 'slide-left 0.3s ease-out',
				'slide-top': 'slide-top 0.3s ease-out',
			},
		},
	},
	plugins: [],
} satisfies Config
