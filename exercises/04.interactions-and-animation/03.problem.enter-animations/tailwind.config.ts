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
			/* 
				🐨 Extend the 'keyframes' object. 
				
				Create a 'slide-top' keyframe. It should start with...
				- a 20px translation on the Y axis
				- an opacity of 0%

				...and end with
				- a 0px translation on the Y axis
				- an opacity of 100%
			*/

			/* 
				🐨 Extend the 'animation' object. 
				
				Create a 'slide-top' animation. It should use the 'slide-top' 
				keyframe, last 0.3s, and use the 'ease-out' timing function.
			*/
		},
	},
	plugins: [],
} satisfies Config
