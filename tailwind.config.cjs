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
					950: '#130124'
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
			}
		}
	},
	plugins: []
}
