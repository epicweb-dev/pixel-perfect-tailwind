import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{ts,tsx,js,jsx}', './index.html'],
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
					🐨 Add a 'slide-left' keyframe. It should be just like the 'slide-top' 
					keyframe, but with the translate happening on the X axis.
				*/
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				/* 
					🐨 Add a 'slide-left' animation, which replicates the 'slide-top' 
					animation, but with the 'slide-left' keyframe.
				*/
				'slide-top': '0.3s slide-top ease-out backwards',
			},
		},
	},
	plugins: [],
} satisfies Config
