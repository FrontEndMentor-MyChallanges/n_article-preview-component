/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html', './src/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				customDarkGrayishBlue: '#48556a',
				customDarkBlue: '#6d7f97',
				customGrayishBlue: '#9eafc2',
				customLightGrayishBlue: '#ecf2f8',
			},
		},
	},
	plugins: [],
};
