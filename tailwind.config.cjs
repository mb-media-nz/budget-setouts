/** @type {import('tailwindcss').Config} */
require('dotenv').config()

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'xs': '500px',
				'xmd': '999px'
			},
			colors: {
				primaryTheme: process.env.PRIMARY_COL,
				primaryThemeDark: '#e2b10e',
				primary: {
					"light": "var(--primary-light)",
					"regular": "var(--primary-regular)",
					"dark": "var(--primary-dark)"
				},
				darkGrayTheme: '#23292c',
				darkGreyThemeDark: '#1f2528'
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			}
		}
	},
	plugins: []
};


