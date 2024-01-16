/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		backgroundSize: {
			sm: ''
		},
		fontFamily: {
			sans: ['Atkinson Hyperlegible', 'system-ui'],
			display: ['Outfit', 'system-ui']
		},
		fontMetrics: {
			'Atkinson Hyperlegible': {
				capHeight: 660,
				ascent: 796,
				descent: -251,
				unitsPerEm: 1000
			},
			Outfit: {
				capHeight: 694,
				ascent: 1000,
				descent: -260,
				unitsPerEm: 1000
			}
		},
		extend: {
			keyframes: {
				flyUp: {
					from: {
						transform: 'translateY(100%)'
					},
					to: {
						transform: 'translateY(0)'
					}
				},
				flyUpOut: {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(120%)'
					}
				},
				flyDown: {
					from: {
						transform: 'translateY(-100%)'
					},
					to: {
						transform: 'translateY(0)'
					}
				},
				flyLeft: {
					from: {
						transform: 'translateX(100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				flyRight: {
					from: {
						transform: 'translateX(-100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				flyRight40: {
					'0%': {
						transform: 'translateX(-40px)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				pacmanBottom: {
					'0%': {},
					'10%': {
						transform: 'scale(1.7) translateX(-5px)'
					},
					'20%': {
						transform: 'scale(1.7) translateX(20%) rotate(60deg)'
					},
					'30%': {
						transform: 'scale(1.7) translateX(70%) rotate(0deg)'
					},
					'40%': {
						transform: 'scale(1.7) translateX(110%) rotate(60deg)'
					},
					'50%': {
						transform: 'scale(1.7) translateX(165%) rotate(0deg)'
					},
					'60%': {
						transform: 'scale(1.7) translateX(220%) rotate(60deg)'
					},
					'70%': {
						transform: 'scale(1.7) translateX(250%) rotate(0deg)'
					},
					'90%': {
						transform: 'scale(1.7) translateX(-7px)'
					},
					'100%': {
						transform: ''
					}
				},
				pacmanTop: {
					'0%': {},
					'10%': {
						transform: 'scale(1.7) translateX(-5px)'
					},
					'20%': {
						transform: 'scale(1.7) translateX(20%) rotate(-60deg)'
					},
					'30%': {
						transform: 'scale(1.7) translateX(70%) rotate(0deg)'
					},
					'40%': {
						transform: 'scale(1.7) translateX(110%) rotate(-60deg)'
					},
					'50%': {
						transform: 'scale(1.7) translateX(165%) rotate(0deg)'
					},
					'60%': {
						transform: 'scale(1.7) translateX(220%) rotate(-60deg)'
					},
					'70%': {
						transform: 'scale(1.7) translateX(250%) rotate(0deg)'
					},
					'90%': {
						transform: 'scale(1.7) translateX(-7px)'
					},
					'100%': {
						transform: ''
					}
				},
				disappearRight: {
					'5%': {
						width: '100%',
						transform: ''
					},
					'65%': {
						width: '0%'
					},
					'70%': {
						width: '0%'
					},
					'90%': {
						width: '100%'
					}
				},
				spinLeftCW: {
					'0%': {
						transform: 'translate(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translate(-20px) rotate(180deg)'
					},
					'100%': {
						transform: 'translate(0px) rotate(360deg)'
					}
				},
				spinLeftACW: {
					'0%': {
						transform: 'translate(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translate(-20px) rotate(-180deg)'
					},
					'100%': {
						transform: 'translate(0px) rotate(-360deg)'
					}
				},
				spinOffCW: {
					'0%': {
						transform: 'rotate(0deg) translate(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(180deg) translate(20px) rotate(180deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translate(0px) rotate(360deg)'
					}
				},
				spinOffACW: {
					'0%': {
						transform: 'rotate(0deg) translate(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(-180deg) translate(20px) rotate(-180deg)'
					},
					'100%': {
						transform: 'rotate(-360deg) translate(0px) rotate(-360deg)'
					}
				},
				fadeIn: {
					'0%': {
						opacity: '0%'
					},
					'100%': {
						opacity: '100%'
					}
				}
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-out',
				flyUp: 'flyUp 0.4s ease-out',
				flyUpOut: 'flyUpOut 0.4s ease-out',
				flyDown: 'flyDown 0.4s ease-out',
				flyLeft: 'flyLeft 0.4s ease-out',
				flyRight: 'flyRight 0.4s ease-out',
				flyRight40: 'flyRight40 0.8s ease-out',
				pacmanBottom: 'pacmanBottom 3s linear',
				pacmanTop: 'pacmanTop 3s linear',
				disappearRight: 'disappearRight 3s linear',
				spinLeftCW: 'spinLeftCW 1s linear',
				spinLeftACW: 'spinLeftACW 1s linear',
				spinOffCW: 'spinOffCW 1s linear',
				spinOffACW: 'spinOffACW 1s linear'
			}
		}
	},
	plugins: [
		require('tailwindcss-leading-trim'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'translate-z': (value) => ({
						'--tw-translate-z': value,
						transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`
					}) // this is actual CSS
				},
				{ values: theme('translate'), supportsNegativeValues: true }
			);
		})
	]
};
