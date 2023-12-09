/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
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
				pacman1: {
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
				pacman2: {
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
					'2%': {
						width: '100%',
						transform: ''
					},
					'65%': {
						width: '0%'
					},
					'90%': {
						width: '100%'
					}
				},
				spinLeftCW: {
					'0%': {
						transform: ''
					},
					'50%': {},
					'100%': {}
				}
			},
			animation: {
				flyUp: 'flyUp 0.4s ease-out',
				flyDown: 'flyDown 0.4s ease-out',
				flyLeft: 'flyLeft 0.4s ease-out',
				flyRight: 'flyRight 0.4s ease-out',
				flyRight40: 'flyRight40 0.8s ease-out',
				pacman1: 'pacman1 3s linear',
				pacman2: 'pacman2 3s linear',
				disappearRight: 'disappearRight 3s linear'
			}
		}
	},
	plugins: [require('tailwindcss-leading-trim')]
};
