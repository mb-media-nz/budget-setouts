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
				primaryTheme: '#fdc714',
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


