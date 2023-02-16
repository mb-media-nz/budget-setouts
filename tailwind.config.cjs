/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'xs': '500px',
				'xmd': '999px'
			},
			colors: {
				primaryTheme: '#3ab1fc',
				primaryThemeDark: '#31a4ed',
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


