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
				}
			},
			animation: {
				flyUp: 'flyUp 0.4s ease-out',
				flyDown: 'flyDown 0.4s ease-out',
				flyLeft: 'flyLeft 0.4s ease-out',
				flyRight: 'flyRight 0.4s ease-out',
				flyRight40: 'flyRight40 0.8s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-leading-trim')]
};
