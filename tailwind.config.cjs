const colors = require('tailwindcss/colors')


const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			mustard: {
				DEFAULT: '#eeba2b'
			},
			mint:  {
				DEFAULT: '#25cec8'
			},
			white: {
				DEFAULT: '#fff'
			},
			black: {
				DEFAULT: '#000000'
			},
			gray: colors.coolGray
		},
		extend: {},
	},
	plugins: [],
};

module.exports = config;