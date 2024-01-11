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
			fontSize: {
				'4.5xl': ['2.625rem', '1.15'],
				'5.5xl': ['3.375rem', '1'],
			},
			keyframes: {
				/* 
					🐨 Create a 'roll-reveal' keyframe object.

					It should start with...
					- a rotation of 12 degrees
					- a scale of 0%
					- an opacity of 0%

					...and end with:
					- a rotation of 0 degrees
					- a scale of 100%
					- an opacity of 100%
				*/
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
				/* 
					🐨 Add a 'roll-reveal' animation. It should use the 'roll-reveal' keyframe
					you just created, and animate once over 0.4 seconds.

					Have fun with the easing function! 
					https://cubic-bezier.com is a great resource ✨
					
					In the solution, we use cubic-bezier(.22,1.28,.54,.99)
				*/
				'slide-left': 'slide-left 0.3s ease-out',
				'slide-top': 'slide-top 0.3s ease-out',
			},
		},
	},
	plugins: [],
} satisfies Config
