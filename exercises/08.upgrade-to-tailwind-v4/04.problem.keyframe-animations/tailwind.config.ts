import easings from 'open-props/src/easing'
// @ts-expect-error tailwind v4 doesn't have a TS config. We'll be removing this shortly
import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
	theme: {
		extend: {
			/*
				🐨 Port the `keyframes` and `animation` defitions 
					below to the CSS file.
			*/
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
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
				'roll-reveal': `0.4s roll-reveal ${easings['--ease-spring-2']} backwards`,
				'fade-in': '0.4s fade-in ease-out backwards',
				'slide-top': '0.3s slide-top ease-out backwards',
				'slide-left': '0.3s slide-left ease-out backwards',
			},
		},
	},
	plugins: [],
} satisfies Config
