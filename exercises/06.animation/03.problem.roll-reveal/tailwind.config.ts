import easings from 'open-props/src/easing'
import { type Config } from 'tailwindcss'

/*
	🧝‍♀️ I've added the 'open-props' npm package and 
	imported a series of easing timing functions.
	
	You can use one of these to fine-tune the "roll-reveal" animation below!
*/

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
					🐨 1. Create a 'roll-reveal' keyframe object.

					It should start with...
					- a rotation of 12 degrees
					- a scale of 0%
					- an opacity of 0%

					...and end with:
					- a rotation of 0 degrees
					- a scale of 100%
					- an opacity of 100%
				*/

				/*
					👨‍💼 We want to respect the user's system preferences for reduced motion,
					so let's also create an "alternative", simpler reveal. 

					🐨 2. Create a 'fade-in' keyframes definition. 
					
					It should start at 0% opacity and end at 100% opacity.
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
					🐨 1. Add a 'roll-reveal' animation. It should use the 'roll-reveal' keyframe
					you just created, and animate once over 0.4 seconds.

					Try your own easigns (https://cubic-bezier.com is a great resource ✨), 
					or have fun playing with Open Props' easing function we've imported! 
					
					In the solution, we use the `--ease-spring-2` easing function.
				*/

				/* 
					🐨 2. Add a 'fade-in' animation. It should use the 'fade-in' keyframe
					you just created, and animate once over 0.4 seconds.
				*/
				'slide-top': '0.3s slide-top ease-out backwards',
				'slide-left': '0.3s slide-left ease-out backwards',
			},
		},
	},
	plugins: [],
} satisfies Config
