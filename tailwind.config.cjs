const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
				display: ['Carter One', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				violet: {
					50: '#F5F3FF',
					100: '#F8F7FF',
					150: '#FBFAFF',
					200: '#EDE9FE',
					250: '#DDD6FE',
					300: '#CEC4FF',
					350: '#C4B5FD',
					400: '#B49DFA',
					450: '#A78BFA',
					500: '#996FF9',
					550: '#8B5CF6',
					600: '#7C3AED',
					650: '#6D28D9',
					700: '#5B21B6',
					750: '#4C1D95',
					800: '#380E78',
					850: '#27055E',
					900: '#130030',
					950: '#0A001B'
				},
				gray: {
					950: '#1E1B22',
					900: '#3D3845',
					800: '#575062',
					700: '#696176',
					600: '#7E748D',
					500: '#91899E',
					400: '#A6A0B2',
					300: '#D7D5DD',
					200: '#E9E8EC',
					100: '#F3F2F5',
					50: '#F9F8FA'
				}
			},
			animation: {
				blob: 'blob 12s infinite'
			},
			keyframes: {
				blob: {
					'25%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'50%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'75%': {
						transform: 'translate(-20px, 20px) scale(0.5)'
					},
					'100%': {
						transform: 'tranlate(-10px, 30px) scale(1)'
					}
				}
			}
		}
	},
	plugins: []
}
